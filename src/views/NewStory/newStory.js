import Editor from 'vue2-medium-editor';
import HeaderBar from '../../components/Header/Header.vue';
import { getImageDataURL } from '../../util';
import { uploadCoverPhoto } from '../../firebase/storage';
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
      }
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
      const { storyTitle, story, category, tag, coverPhotoURL } = this;
      // Check empty
      if (
        !storyTitle ||
        !story ||
        !coverPhotoURL ||
        !category.selected.length ||
        !tag.selected.length) return;

      try {

        console.log('saving a photo');
        const response = await uploadCoverPhoto(coverPhotoURL);
        console.log('Photo saved !');
        const coverPhotoPath = response.ref.location.path_;

        console.log('Saving a story to database');
        const newStory = {
          title: storyTitle,
          story,
          categories: category.selected,
          tags: tag.selected,
          coverPhotoPath
        };

        // Save new story
        await createNewStory(newStory);
        console.log('save finished');
      } catch (err) {
        console.error(err);
      }
    }
  }
};
