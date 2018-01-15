import { auth } from './index';
import signupWithProvider from './withProviders';
import afterSignup from './afterSignup';

const registerWithEmailAndPassword = registerInfo => {
  return auth.createUserWithEmailAndPassword(registerInfo.email, registerInfo.password);
};

const getResult = (provider, registerInfo) => {
  if (provider === 'local') {
    return registerWithEmailAndPassword(registerInfo);
  }
  return signupWithProvider(provider);
};

export default async (provider, registerInfo) => {
  const result = await getResult(provider, registerInfo);
  const isNewUser = typeof registerInfo !== "undefined" ? true : result.additionalUserInfo.isNewUser;

  // Check if user is new or not
  if (!isNewUser) {
    return 'success';
  }
  return afterSignup(result, registerInfo);
};
