import { MUTATE_STORY, INIT_STORY } from './addEditStory.type';

export default {
  [MUTATE_STORY]: (state, payload) => {
    state.story[payload.key] = payload.val;
  },
  [INIT_STORY]: (state, story) => {
    const _story = { ...state.story, ...story };
    state.story = _story;
  }
}
