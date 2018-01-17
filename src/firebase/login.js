import { auth } from './index';
import loginProvider from './withProviders';
import afterSignup from './afterSignup';

const getResult = (provider, credential) => {
  if (provider === 'local') {
    return auth.signInWithEmailAndPassword(credential.email, credential.password);
  }
  return loginProvider(provider);
};

export default async (provider, credential) => {
  const result = await getResult(provider, credential);

  /*
  Sometimes user may try to login with auth provider without
  signing up with particular auth provider before, so to handle this case
  let's check if user is new or not
  */
  const { isNewUser } = result.additionalUserInfo;
  if (isNewUser) {
    return afterSignup(result);
  }
  return 'success';
};
