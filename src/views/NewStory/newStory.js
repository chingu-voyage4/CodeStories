import Editor from 'vue2-medium-editor';
import HeaderBar from '../../components/Header/Header.vue';
import { getImageDataURL } from '../../util';
import { uploadCoverPhoto } from '../../firebase/api/storage';
import { createNewStory } from '../../firebase/api/stories';

export default {
  name: 'NewStory',
  components: {
    HeaderBar,
    Editor
  },
  data () {
    return {
      editor: {
        options: {
          placeholder: { text: "Write a story ..." }
        },
      },
      storyTitle: "",
      story: "",
      coverPhotoURL: "",
      category: {
        options: [],
        selected: []
      },
      tag: {
        options: [],
        selected: []
      },
      loading: false
    };
  },
  methods: {
    handleStoryWrite (e) {
      const story = e.event.target.innerHTML;
      this.story = story;
    },

    async handleUploadCoverPhoto (e) {
      const file = e.target.files[0];
      try {
        const photoUrl = await getImageDataURL(file);
        this.coverPhotoURL = photoUrl;
      } catch (err) {
        console.error(err);
      }
    },

    triggerUploadPhoto () {
      const fileInput = document.querySelector("#upload_photo");
      // Trigger click
      fileInput.click();
    },
    async handleStoryPublish () {
      const {
        storyTitle,
        story,
        category,
        tag,
        coverPhotoURL
      } = this;
      // Check empty
      if (
        !storyTitle ||
        !story ||
        !coverPhotoURL ||
        !category.selected.length ||
        !tag.selected.length
      ) return;

      this.loading = true;
      try {
        const response = await uploadCoverPhoto(coverPhotoURL);
        const coverPhotoPath = response.ref.location.path_;

        const newStory = {
          title: storyTitle,
          story,
          categories: category.selected,
          tags: tag.selected,
          coverPhotoPath,
          publishAt: Date.now()
        };

        // Save new story
        const savedStory = await createNewStory(newStory);
        this.$router.push(`/${savedStory.slug}`);
      } catch (err) {
        console.error(err);
        this.loading = false;
      }
    }
  }
};
