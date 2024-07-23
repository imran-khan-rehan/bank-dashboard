'use client';
// pages/signin.js
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import eyeImage from '@/public/icons/eye-slash.svg';
import eyeSlash from '@/public/icons/eye-slash.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Submitbutton from '@/components/submitbutton';
import Link from 'next/link';
export default function Signin() {
//   const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidCred, setValidCred] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('Incorrect email or password. Please try again.');
  const [isLoading, setIsLoading] = useState(false);

const userId=45;

//   if (userId) {
//     // router.push('/allposts');
//   }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidCred(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setValidCred(true);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      try {
        const response = await fetch('https://imagebackend.vercel.app/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
        
        //   router.push('/create-post');
        } else {
          setMessage('Incorrect email or password. Please try again.');
          setValidCred(false);
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
        setValidCred(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    userId && (
      <div>
        <div className='custom h-screen flex justify-center items-center'>
          <div className="fixwidth p-20 bg-white relative bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 rounded-md shadow-md max-md:pt-20 max-md:pb-20 max-md:pl-10 max-md:pr-10 max-md:w-80">
            <div className="text-3xl font-bold leading-9 text-center">Sign in</div>
            <div className="text-black text-xs font-normal leading-0 mt-3 text-center">
              Dont have an account? 
              <Link href="/signup"><div className="ml-1 underline text-yellow-500">Sign up</div></Link>
            </div>
            <div className="mb-2 mt-7 font-poppins">
              <div className="flex justify-between">
                <label className="text-black block font-medium text-base">E-mail</label>
              </div>
              <input
                type="email"
                placeholder='name@email.com'
                value={email}
                onChange={handleEmailChange}
                className="border border-solid border-yellow-500 w-full p-2 rounded-xl text-sm font-normal"
              />
            </div>
            <div className="font-poppins mb-2">
              <label className="text-black block font-medium text-base">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  placeholder='enter your password'
                  onChange={handlePasswordChange}
                  className="border border-solid border-yellow-500 w-full p-2 pr-10 rounded-xl text-sm font-normal"
                />
                <img
                  style={{ width: 'auto', height: '45%' }}
                  src={showPassword ? eyeSlash.src : eyeImage.src}
                  width={18}
                  height={28}
                  alt="Show Password"
                  className={`absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer ${showPassword ? 'text-black' : ''} ${password.length >= 1 ? 'block' : 'hidden'}`}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className='h-11'>
              <div className={`bg-red-200 p-2 rounded-xl text-red-700 font-medium text-base ${isValidCred ? 'hidden' : 'flex'}`}>
                {message}
              </div>
            </div>
            <Submitbutton message='Sign in' handleSignIn={handleSignIn} />
          </div>
          {/* {isLoading && <Loader />} */}
        </div>
        <footer className="bg-black py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row pb-4 justify-between gap-9 justify-around items-center">
            {/* <div className='logo'>
              <a href="/">
                <img src={logo.src} alt="logo" className="w-32 ml-2 object-contain bg-white py-6 px-4" />
              </a>
            </div> */}
            <div className="space-x-4">
              <a href="#" className="text-white justify-between flex mt-2 hover:text-gray-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <h1>Facebook</h1>
              </a>
              <a href="#" className="text-white justify-between flex mt-2 hover:text-gray-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <h1 className='ml-4'>Instagram</h1>
              </a>
              <a href="#" className="text-white justify-between flex mt-2 hover:text-gray-400 transition-colors duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                <h1>Twitter</h1>
              </a>
            </div>
            <div className="mt-4 flex">
              <div className="flex-grow">
                <input type="email" className="w-full px-4 py-2 rounded-l-lg focus:outline-none" placeholder="Your email address" />
              </div>
              <div>
                <button className="bg-red-500 hover:bg-black text-white px-6 py-2 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright text-center pt-3 text-white">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  );
}
