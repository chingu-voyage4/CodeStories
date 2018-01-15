/* Login or sign up with auth providers */
import googleAuth from './authProviders/googleAuth';
import githubAuth from './authProviders/githubAuth';
import twitterAuth from './authProviders/twitterAuth';

export default provider => {
  switch (provider) {
    case 'google':
      return googleAuth();

    case 'github':
      return githubAuth();

    case 'twitter':
      return twitterAuth();

    default:
      return Promise.reject(new Error('Please specify the auth provider'));
  }
};
