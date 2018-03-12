import { GET_STORY } from './addEditStory.type';

export default {
  [GET_STORY]: state => {
    return state.story;
  }
};
