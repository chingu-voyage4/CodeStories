import { GET_SINGLE_STORY } from './singleStory.type';

export default {
  [GET_SINGLE_STORY]: state => {
    return state.singleStory;
  }
};
