import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Body from '../main/View/Body'

function Login() {
  const email = 'moheb@gmail.com'
  const pass = '123456'

  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formdata.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (formdata.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (formdata.email == email && formdata.password == pass) {
        navigate("/body", { state: formdata });
      }
      else
        alert("username, email or password is incorect")
      
    }
  };
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
              value={formdata.email}
              onChange={handleChange}
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
              value={formdata.password}
              onChange={handleChange}
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

          <button
            type="submit"
            className="w-full mt-2 rounded-md bg-indigo-600 py-2 text-white font-semibold hover:bg-indigo-700"
            onClick={handleSubmit}
         >
            Sign in
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6 flex items-center justify-center">
          <div className="w-1/4 border-t border-gray-300"></div>
          <span className="mx-5 text-sm text-gray-500">Or continue with</span>
          <div className="w-1/4 border-t border-gray-300"></div>
        </div>

        <div className="mt-4 flex gap-4">
          <button className="flex-1 flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100">
            <FaGoogle className="mr-2" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100">
            <FaGithub className="mr-2" />
            GitHub
          </button>
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