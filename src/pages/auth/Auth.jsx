import React from 'react';
import { auth, provider } from '../../config/firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const authInfo = {
        userId: result.user?.uid,
        name: result.user?.displayName,
        email: result.user?.email,
        profilePhoto: result.user?.photoURL,
        isAuth: true,
      };
      localStorage.setItem('authInfo', JSON.stringify(authInfo));
      console.log('Authentication successful:', authInfo);
      navigate('/expense');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className='text-center'>
      <h2 className='p-4'>Welcome</h2>
      <p className='p-4'>Sign in to continue with Google</p>
      <button className='p-2 border rounded-xl' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Auth;