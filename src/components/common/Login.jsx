import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [fail, setFail] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("login", true);
      setFail(true);
      alert("✅ Login successful!");
      navigate("/");
    } else {
      setFail(false);
    }
  };

  return (
    <div className="min-h-screen w-full mt-16 flex items-center justify-center bg-gradient-to-br from-[#e6f2f6] to-[#f9fcfd] px-4">
      
      {/* Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden">

        {/* Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00627B] to-[#00a0c6]" />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#00627B] tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Login to Al Dosari Reserve Portal
          </p>
        </div>

        {/* Error Message */}
        {fail === false && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl animate-shake">
            <p className="text-red-600 text-sm text-center">
              Login failed. Please check your credentials.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              EMAIL ADDRESS
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#00627B]/30
                         focus:border-[#00627B]
                         transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">
              PASSWORD
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
                         focus:outline-none focus:ring-2 focus:ring-[#00627B]/30
                         focus:border-[#00627B]
                         transition-all duration-200"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-[#00627B] to-[#008db0]
                       text-white py-3 rounded-xl text-sm font-semibold
                       hover:shadow-lg hover:scale-[1.01]
                       active:scale-[0.98]
                       transition-all duration-200"
          >
            Login 
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            Don’t have an account?
          </p>
          <button
            onClick={() => navigate("/signup")}
            type="button"
            className="text-sm cursor-pointer font-semibold text-[#00627B]
                       hover:text-[#004e62] hover:underline
                       transition"
          >
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
