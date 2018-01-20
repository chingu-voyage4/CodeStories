import Editor from 'vue2-medium-editor';
import HeaderBar from '../../components/Header/Header.vue';

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
        story: ""
      },
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
      this.editor.story = story;
    }
  }
};
