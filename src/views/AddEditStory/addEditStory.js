import Editor from 'vue2-medium-editor';
import { mapGetters } from 'vuex';
import HeaderBar from '../../components/Header/Header.vue';
import { getImageDataURL } from '../../util';
import {
  GET_STORY,
  MUTATE_STORY,
  STORY_PUBLISH,
  STORY_SAVE
} from './addEditStory.type';

export default {
  name: 'AddEditStory',
  components: {
    HeaderBar,
    Editor
  },
  computed: mapGetters({ story: GET_STORY }),
  data () {
    return {};
  },
  methods: {
    async handleStoryPublish () {
      const { commit, dispatch } = this.$store;
      const {
        storyTitle,
        story,
        category,
        tag,
        coverPhotoURL
      } = this.story;

      // Check empty
      if (
        !storyTitle ||
        !story ||
        !coverPhotoURL ||
        !category.selected.length ||
        !tag.selected.length
      ) return;

      commit(MUTATE_STORY, { key: 'storyPublishLoading', val: true });
      try {
        const publishedStory = await dispatch(STORY_PUBLISH, {
          ...this.story,
          category: category.selected,
          tag: tag.selected
        });
        this.$router.push(`/${publishedStory.slug}`);
        commit(MUTATE_STORY, { key: 'storyPublishLoading', val: false });

        // Reset fields
        commit(MUTATE_STORY, { key: 'story', val: '' });
        commit(MUTATE_STORY, { key: 'storyTitle', val: '' });
        commit(MUTATE_STORY, { key: 'coverPhotoURL', val: '' });
        commit(MUTATE_STORY, { key: 'category', val: { options: [], selected: [] } });
        commit(MUTATE_STORY, { key: 'tag', val: { options: [], selected: [] } });

      } catch (err) {
        console.error(err);
        commit(MUTATE_STORY, { key: 'storyPublishLoading', val: false });
      }
    },

    async handleStorySave () {
      const { commit, dispatch } = this.$store;
      const {
        storyTitle,
        story,
        category,
        tag
      } = this.story;
      // Check empty
      if (
        !storyTitle || !story
      ) return;
      try {
        commit(MUTATE_STORY, { key: 'storySaveLoading', val: true });
        const savedStory = await dispatch(STORY_SAVE, {
          ...this.story,
          category: category.selected,
          tag: tag.selected
        });
        commit(MUTATE_STORY, { key: 'storySaveLoading', val: false });
        // Save storyUid so that same story will be updated on save later.
        commit(MUTATE_STORY, { key: 'storyUid', val: savedStory.storyUid });
      } catch (e) {
        console.error(e);
        commit(MUTATE_STORY, { key: 'storySaveLoading', val: false });
      }
    },

    handleStoryWrite (e) {
      const story = e.event.target.innerHTML;
      this.$store.commit(MUTATE_STORY, { key: 'story', val: story });
    },

    handleChange (key, val) {
      this.$store.commit(MUTATE_STORY, { key, val });
    },

    async handleUploadCoverPhoto (e) {
      const file = e.target.files[0];
      try {
        const photoUrl = await getImageDataURL(file);
        this.$store.commit(MUTATE_STORY, { key: 'coverPhotoURL', val: photoUrl });
      } catch (err) {
        console.error(err);
      }
    },

    triggerUploadPhoto () {
      const fileInput = document.querySelector("#upload_photo");
      // Trigger click
      fileInput.click();
    }
  }
};
