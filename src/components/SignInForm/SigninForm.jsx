import React from 'react';
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import Notification from '../Notification/Notification';
// scss
import './SigninForm.scss';
const formfieldDefault = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function SignupForm({ logGoogleUser }) {
  const [{ email, password }, setUser] = useState(formfieldDefault);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      console.log('check');
      // setUser(formfieldDefault);
    } catch (error) {
      Notification(error.code, 'danger');
      console.log('user creation error ', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className='sign-up-container'>
      <h2>Already Have have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          value={password}
          name='password'
          type='password'
          required
          onChange={handleChange}
        />

        <div className='buttons-container'>
          <Button
            buttonType='inverted'
            type='submit'
          >
            SIGN IN
          </Button>
          <Button
            buttonType='google'
            onClick={logGoogleUser}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
