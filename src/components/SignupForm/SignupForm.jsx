import React from 'react';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase.utils';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import Notification from '../Notification/Notification';
// scss
import './SignupForm.scss';
const formfieldDefault = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function SignupForm() {
  const [{ displayName, email, password, confirmPassword }, setUser] = useState(formfieldDefault);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('check');
    if (password !== confirmPassword) {
      Notification('password does not muatch', 'danger');
    }
    try {
      await createAuthUserWithEmailAndPassword(email, password);
      setUser(formfieldDefault);
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

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user]);
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          value={displayName}
          type='text'
          required
          onChange={handleChange}
        />

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

        <FormInput
          label='Confirm Password'
          value={confirmPassword}
          name='confirmPassword'
          type='password'
          required
          onChange={handleChange}
        />
        <Button
          buttonType='inverted'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
