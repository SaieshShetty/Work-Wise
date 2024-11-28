import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-400 to-gray-600">
      <div className="w-full max-w-md  rounded-xl shadow-lg p-8 bg-gradient-to-br from-gray-700 to-gray-900">
        <h1 className="text-2xl font-bold text-center text-emerald-600 mb-6">
          Login to Your Account
        </h1>
        <form onSubmit={submitHandler} className="flex flex-col">
          {/* Email Input */}
          <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="outline-none bg-transparent border border-emerald-300 text-white rounded-full px-5 py-3 text-base placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 mb-4"
          />

          {/* Password Input */}
          <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
            className="outline-none bg-transparent border border-emerald-300 text-white rounded-full px-5 py-3 text-base placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 mb-6"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold rounded-full py-3 px-5 text-lg hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300 transition ease-in-out duration-300"
          >
            Log in
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-emerald-600 font-medium hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
