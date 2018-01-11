import testMutations from '../components/Test/test.mutation';

const setLoggedInUser = (state, user) => {
  state.user = user;
};

export default {
  setLoggedInUser,
  ...testMutations
};
