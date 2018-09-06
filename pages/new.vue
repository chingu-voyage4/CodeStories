<template>
  <v-container grid-list-md>
    <v-form @submit.prevent="handleStoryPublish">
      <v-layout row wrap>
        <v-flex md9 sm12 xs12>
          <v-card>
            <v-container>
              <v-text-field
                :value="story.storyTitle"
                type="text"
                placeholder="Title"
                @input="v => { handleChange('storyTitle', v) }"
                required
                :disabled="story.storyPublishLoading || story.storySaveLoading"
              ></v-text-field>
              <Editor
                :text="story.story"
                :options="story.editor.options"
                @edit="handleStoryWrite"
                class="story-editor"
              ></Editor>
              <br /><br /><br />
            </v-container>
          </v-card>
        </v-flex>
        <v-flex md3 sm12 xs12>
          <v-card>
            <v-container>
              <v-select
                label="Category"
                :items="story.category.options"
                v-model="story.category.selected"
                tags
                chips
                multiple
                autocomplete
                max-height="400"
                :disabled="story.storyPublishLoading || story.storySaveLoading"
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="data.parent.selectItem(data.item)"
                    :selected="data.selected"
                    class="chip--select-multi"
                    :key="JSON.stringify(data.item)"
                  > {{ data.item }} </v-chip>
                </template>
              </v-select>
              <v-select
                label="Tags"
                :items="story.tag.options"
                v-model="story.tag.selected"
                multiple
                tags
                chips
                max-height="400"
                :disabled="story.storyPublishLoading || story.storySaveLoading"
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="data.parent.selectItem(data.item)"
                    :selected="data.selected"
                    class="chip--select-multi"
                    :key="JSON.stringify(data.item)"
                  > {{ data.item }} </v-chip>
                </template>
              </v-select>
              <v-card v-if="story.coverPhotoUrl">
                <v-card-media :src="story.coverPhotoUrl" height="200px">
                </v-card-media>
              </v-card>
              <input type="file" id="upload_photo" @change="handleUploadCoverPhoto" style="visibility: hidden"/>
              <v-btn color="secondary" block raised @click="triggerUploadPhoto" :disabled="story.storyPublishLoading || story.storySaveLoading">
                <v-icon>cloud_upload</v-icon> &nbsp;Upload a cover photo
              </v-btn>
              <v-btn color="info" block raised :disabled="story.storyPublishLoading || story.storySaveLoading" @click="handleStorySave">
                <v-progress-circular indeterminate v-if="story.storySaveLoading"></v-progress-circular>
                <v-icon v-if="!story.storySaveLoading">save</v-icon> &nbsp;Save as draft
              </v-btn>
              <v-btn type="submit" color="success" block raised :disabled="story.storyPublishLoading || story.storySaveLoading">
                <v-progress-circular indeterminate v-if="story.storyPublishLoading"></v-progress-circular>
                <v-icon v-if="!story.storyPublishLoading">send</v-icon> &nbsp;Publish
              </v-btn>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import Editor from "vue2-medium-editor";
import { mapGetters } from "vuex";
import { getImageDataURL } from "../util";
import {
  moduleName,
  GET_STORY,
  MUTATE_STORY,
  STORY_PUBLISH,
  STORY_SAVE,
  FETCH_STORY,
  FETCH_STORY_COVERPHOTO
} from "../store/story";

export default {
  middleware: "authenticated",
  layout: "page",
  name: "AddEditStory",
  components: {
    Editor
  },
  computed: mapGetters({ story: `${moduleName}/${GET_STORY}` }),
  data() {
    return {};
  },
  mounted() {
    // Check if cover photo path is available,
    // It is available when published story is on edit.
    if (this.story.coverPhotoPath) {
      this.$store.dispatch(
        `${moduleName}/${FETCH_STORY_COVERPHOTO}`,
        this.story.coverPhotoPath
      );
    }
  },
  methods: {
    async handleStoryPublish() {
      const { commit, dispatch } = this.$store;
      const { storyTitle, story, category, tag, coverPhotoUrl } = this.story;

      // Check empty
      if (
        !storyTitle ||
        !story ||
        !coverPhotoUrl ||
        !category.selected.length ||
        !tag.selected.length
      )
        return;

      commit(`${moduleName}/${MUTATE_STORY}`, {
        key: "storyPublishLoading",
        val: true
      });
      try {
        const publishedStory = await dispatch(
          `${moduleName}/${STORY_PUBLISH}`,
          {
            ...this.story,
            category: category.selected,
            tag: tag.selected
          }
        );
        this.$router.push(`/${publishedStory.slug}`);
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storyPublishLoading",
          val: false
        });

        // Reset fields
        commit(`${moduleName}/${MUTATE_STORY}`, { key: "story", val: "" });
        commit(`${moduleName}/${MUTATE_STORY}`, { key: "storyTitle", val: "" });
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "coverPhotoUrl",
          val: ""
        });
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "category",
          val: { options: [], selected: [] }
        });
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "tag",
          val: { options: [], selected: [] }
        });
      } catch (err) {
        console.error(err);
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storyPublishLoading",
          val: false
        });
      }
    },

    async handleStorySave() {
      const { commit, dispatch } = this.$store;
      const { storyTitle, story, category, tag } = this.story;
      // Check empty
      if (!storyTitle || !story) return;
      try {
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storySaveLoading",
          val: true
        });
        const savedStory = await dispatch(`${moduleName}/${STORY_SAVE}`, {
          ...this.story,
          category: category.selected,
          tag: tag.selected
        });
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storySaveLoading",
          val: false
        });
        // Save storyUid so that same story will be updated on save later.
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storyUid",
          val: savedStory.storyUid
        });
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "coverPhotoPath",
          val: savedStory.coverPhotoPath
        });
      } catch (e) {
        console.error(e);
        commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "storySaveLoading",
          val: false
        });
      }
    },

    handleStoryWrite(e) {
      const story = e.event.target.innerHTML;
      this.$store.commit(`${moduleName}/${MUTATE_STORY}`, {
        key: "story",
        val: story
      });
    },

    handleChange(key, val) {
      this.$store.commit(`${moduleName}/${MUTATE_STORY}`, { key, val });
    },

    async handleUploadCoverPhoto(e) {
      const file = e.target.files[0];
      try {
        const photoUrl = await getImageDataURL(file);
        this.$store.commit(`${moduleName}/${MUTATE_STORY}`, {
          key: "coverPhotoUrl",
          val: photoUrl
        });
      } catch (err) {
        console.error(err);
      }
    },

    triggerUploadPhoto() {
      const fileInput = document.querySelector("#upload_photo");
      // Trigger click
      fileInput.click();
    }
  },
  asyncData({ route, store }) {
    // Check if there is slug in route params to indentify
    // current route as for edit.
    const isEdit = Object.keys(route.params).includes("slug");
    if (isEdit) {
      return store.dispatch(`${moduleName}/${FETCH_STORY}`, route.params.slug);
    }
    return Promise.resolve(true);
  }
};
</script>
<style>
.story-editor {
  min-height: 300px;
  outline: none;
}
</style>
