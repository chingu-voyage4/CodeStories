import actions from './singleStory.action';
import mutations from './singleStory.mutation';
import getters from './singleStory.getter';

export default {
  state: {
    singleStory: {
      title: "",
      coverPhotoUrl: "",
      story: "",
      author: null,
      categories: [],
      tags: [],
      hearts: [],
      onSinglePage: false
    }
  },
  actions: { ...actions },
  mutations: { ...mutations },
  getters: { ...getters }
};
