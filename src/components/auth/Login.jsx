import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Body from '../main/View/Body';
import { useAuth } from '../../contexts/authContext';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth';  


function Login() {
  const { userLoggedIn }= useAuth();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const onSubmit = async (e) => {
      e.preventDefault()
      if (!isSigningIn) {
          setIsSigningIn(true)
          try {
              await doSignInWithEmailAndPassword(email, password)
          } catch (error) {
              setErrorMessage(error.message)
              setIsSigningIn(false)
          }
      }
  }

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
       await doSignInWithGoogle();
      } catch (error) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    const formdata = { email, password };
    return navigate("/body", { state: formdata });
  }



  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <div className="flex justify-center">
          <img
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-2xl font-semibold text-gray-900">
          Login in to your account
        </h2>

        {/* Form */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* <button
            type="submit"
            className="w-full mt-2 rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-700"
            onClick={handleSubmit}
         >
            Sign in
          </button> */}
        </form>

        {/* Social Login */}
        <div className="mt-6 flex items-center justify-center">
          <div className="w-1/4 border-t border-gray-300"></div>
          <span className="mx-5 text-sm text-gray-500">Or continue with</span>
          <div className="w-1/4 border-t border-gray-300"></div>
        </div>

        <div className="mt-4 flex gap-4">
        <button
            onClick={(e) => { onGoogleSignIn(e) }}
            className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                </g>
                <defs>
                    <clipPath id="clip0_17_40">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            {isSigningIn ? 'Signing In...' : 'Continue with Google'}
        </button>
          {/* <button className="flex-1 flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100">
            <FaGithub className="mr-2" />
            GitHub
          </button> */}
        </div>

        {/* Sign-Up Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/sginIn" className="text-indigo-600 hover:underline">
           Sign Up.
          </a>
        </p>
      </div>
    </div>
  );
}


export default Login;