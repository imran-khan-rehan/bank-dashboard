'use client';
import React, { useState } from 'react';
import warimage from '@/public/icons/eye-slash.svg';
import eyeimage from '@/public/icons/eye-slash.svg';
import eyeslash from '@/public/icons/eye-slash.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Submitbutton from '@/components/submitbutton';
// import { logo } from '../assets';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [isValidEmail, setValidEmail] = useState(true);
    const [matchPassword, setMatchPassword] = useState(true);
    const [messageEmail, setMessageEmail] = useState("Enter a valid email address");
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setMessageEmail("Enter a valid email address");
        setEmail(e.target.value);
        setValidEmail(true);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setMatchPassword(true);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setMatchPassword(true);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        checkEmail();
        checkPassword();

        if (isValidEmail && matchPassword && email.length > 0 && password.length > 0 && password === confirmPassword) {
            setIsLoading(true);
            try {
                const response = await fetch('https://imagebackend.vercel.app/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (response.ok) {
                    alert("Signup successful");
                    window.location.href = '/signin';
                } else {
                    const data = await response.json();
                    if (data.message === 'Email already exists') {
                        setMessageEmail(data.message);
                        setValidEmail(false);
                    } else {
                        console.error('Signup failed:', data.message);
                    }
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const checkEmail = () => {
        if (email.length > 0) {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            setValidEmail(emailRegex.test(email));
        }
    };

    const checkPassword = () => {
        setMatchPassword(password === confirmPassword);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const togglePasswordVisibility1 = () => {
        setShowPassword1(prev => !prev);
    };

    return (
        <div>
            <div className="min-h-screen custom flex justify-center items-center text-sm">
                <div className="fixwidth bg-white relative bg-opacity-20 backdrop-filter backdrop-blur-lg border border-gray-300 h-[90%] pt-7 w-[35%] p-10 rounded-md border-1 border-solid border-yellow-500 shadow-md
                max-md:p-8 max-md:w-80 max-md:pt-8 max-md:pb-8 font-medium text-base">
                    <div className="text-3xl font-bold leading-9 text-center">
                        Create account
                    </div>
                    <div className="text-black font-open-sans text-xs font-normal leading-6 text-center">
                        Already have an account? <Link href="/login" className="underline text-yellow-500">Log In</Link>
                    </div>
                    <div className="mb-3 mt-7 font-poppins">
                        <div className="mb-2 flex justify-between">
                            <label className="text-black block">E-mail</label>
                            {!isValidEmail && (
                                <div className="flex">
                                    <img src={warimage} width={20} height={20} alt='warning' className='text-white'></img>
                                    <p className='pl-1 text-red-700'>{messageEmail}</p>
                                </div>
                            )}
                        </div>
                        <input
                            type="email"
                            placeholder='name@email.com'
                            value={email}
                            onBlur={checkEmail}
                            onChange={handleEmailChange}
                            className="border border-solid border-yellow-500 w-full p-2 rounded-md text-sm font-normal"
                        />
                    </div>
                    <div className="mb-4 mt-4 font-poppins">
                        <label className="mb-2 text-black block">Password:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                placeholder='Set your password'
                                onChange={handlePasswordChange}
                                className="border border-solid border-yellow-500 w-full p-2 pr-10 rounded-md text-sm font-normal"
                            />
                            <img
                                src={showPassword ? eyeslash : eyeimage}
                                width={18}
                                height={28}
                                alt="Show Password"
                                className={`absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer ${password.length >= 1 ? 'block' : 'hidden'}`}
                                onClick={togglePasswordVisibility}
                            />
                        </div>
                    </div>
                    <div className="mb-4 mt-4 font-poppins">
                        <div className="mb-2 flex">
                            <label className="text-black">Confirm Password:</label>
                            {!matchPassword && (
                                <div className="flex">
                                    <img src={warimage} width={20} height={20} alt='warning'></img>
                                    <p className='ml-1 text-red-700'>Password doesnt match.</p>
                                </div>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword1 ? 'text' : 'password'}
                                onBlur={checkPassword}
                                value={confirmPassword}
                                placeholder='Confirm your password'
                                onChange={handleConfirmPasswordChange}
                                className="border border-solid border-yellow-500 w-full p-2 rounded-md pr-10 text-sm font-normal"
                            />
                            <img
                                src={showPassword1 ? eyeslash : eyeimage}
                                width={18}
                                height={28}
                                alt="Show Password"
                                className={`absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer ${confirmPassword.length >= 1 ? 'block' : 'hidden'}`}
                                onClick={togglePasswordVisibility1}
                            />
                        </div>
                    </div>
                    <Submitbutton message='Sign up' handleSignIn={handleSignUp} />
                </div>
            </div>
            {/* <footer className="bg-black py-8 px-6">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row pb-4 justify-between gap-9 justify-around items-center">
                    <div className='logo'>
                        <a href="/">
                            <img src={logo} alt="logo" className="w-32 ml-2 object-contain bg-white py-6 px-4" />
                        </a>
                    </div>
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
            </footer> */}
        </div>
    );
};

export default SignUp;
