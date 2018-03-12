<template>
  <div class="content">
    <HeaderBar></HeaderBar>
    <br/><br/><br/>
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
  </div>
</template>

<script src="./addEditStory.js"></script>
<style lang="stylus">
  @import './addEditStory.styl';
</style>
