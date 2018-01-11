import * as testGetters from '../components/Test/test.getter';

const user = state => state.user;

export default {
  user,
  ...testGetters
};
