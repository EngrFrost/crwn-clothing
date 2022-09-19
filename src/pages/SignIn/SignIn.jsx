import React, { Fragment } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import SignInForm from '../../components/SignInForm/SigninForm';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import './AuthContainer.scss';
function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <Fragment>
      {/* <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign In with Google</button> */}
      <div className='auth-container'>
        <SignInForm logGoogleUser={logGoogleUser} />
        <SignupForm />
      </div>
    </Fragment>
  );
}

export default SignIn;
