import actions from './addEditStory.action';
import mutations from './addEditStory.mutation';
import getters from './addEditStory.getter';

export default {
  state: {
    story: {
      editor: {
        options: {
          placeholder: { text: "Write a story ..." }
        },
      },
      storyUid: '',
      publishAt: null,
      storyTitle: "",
      story: "",
      coverPhotoUrl: "",
      category: {
        options: [],
        selected: []
      },
      tag: {
        options: [],
        selected: []
      },
      storySaveLoading: false,
      storyPublishLoading: false
    }
  },
  actions: { ...actions },
  mutations: { ...mutations },
  getters: { ...getters }
};
