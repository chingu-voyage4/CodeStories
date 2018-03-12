import { INIT_SINGLE_STORY, MUTATE_SINGLE_STORY } from './singleStory.type';

export default {
  [INIT_SINGLE_STORY]: (state, story) => {
    const singleStory = { ...state.singleStory, ...story };
    state.singleStory = singleStory;
  },
  [MUTATE_SINGLE_STORY]: (state, { key, val }) => {
    state.singleStory[key] = val;
  }
}
