import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const [formData, setFormData] = useState({ email: "", password: "" });
  // const { setLogin, setToastMsg } = useContext(LoginContext);
  const [fail,setFail] = useState()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
    
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
      setFail(true)
      alert("✅ Login successful!")
      navigate("/");
    } else {
      setFail(false)
    }
  }
    const handleClick = ()=> {
        navigate("/signup")
    }
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#f6f9f6] px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#1f3d2b]">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to Al Dosari Reserve Portal
          </p>
        </div>
        {fail === false ? <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">Login failed. Please try again.</p>
            </div>:""}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
            name="email"
            onChange={handleChange}
            value={formData.email}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm 
                         focus:outline-none focus:border-[#1f3d2b]"
            />  
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
            name="password"
            onChange={handleChange}
            value={formData.password}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm 
                         focus:outline-none focus:border-[#1f3d2b]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#1f3d2b] text-white py-2.5 rounded-lg 
                       text-sm font-medium hover:bg-[#173023] transition"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-500">
            Don’t have an account?
          </p>
          <button 
          onClick={handleClick}
            type="button"
            className="text-sm font-medium text-[#1f3d2b] hover:underline"
          >
            Create an account
          </button>
        </div>

      </div>
    </div>
  );
};

export default Login;
