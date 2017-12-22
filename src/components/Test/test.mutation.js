import {
  CHANGE_MESSAGE
} from './test.type';

export default {
  [CHANGE_MESSAGE]: (state, message) => ({ ...state, message })
};

