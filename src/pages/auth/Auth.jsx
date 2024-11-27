import React, { useEffect, useRef } from 'react';
import { auth, provider } from '../../config/firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { gsap } from 'gsap';

const Auth = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the container to fade in and slide from the top
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Button hover effect
    gsap.fromTo(
      buttonRef.current,
      { boxShadow: '0px 0px 10px rgba(255, 223, 0, 0.5)' },
      {
        boxShadow: '0px 0px 20px rgba(255, 223, 0, 1)',
        duration: 0.5,
        ease: 'power3.out',
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-sm w-full border border-gray-700">
        <h2 className="text-3xl font-bold text-gray-400 text-center mb-4">
          Welcome
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Sign in to continue with Google
        </p>
        <button
          ref={buttonRef}
          onClick={signInWithGoogle}
          className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-md shadow-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 transition duration-500"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;