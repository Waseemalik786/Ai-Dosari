import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  // Errors State
  const [errors, setErrors] = useState({});
  const storedUser = JSON.parse(localStorage.getItem("user"))

  // Strong Password Requirements
  const isStrongPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  // Input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Form handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(storedUser);
    

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is Required";
    } else if (!isStrongPassword(formData.password)) {
      newErrors.password =
        "Password must be strong (8 chars, 1 capital, number & special char)";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!/^\+\d{9,15}$/.test(formData.contact)) {
      newErrors.contact = "Enter valid number with '+'";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

      localStorage.setItem("user", JSON.stringify(formData));
    alert("✅ Signup successful! Please login now.");
    navigate("/login");

  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#f6f9f6] px-4 absolute z-50">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#1f3d2b]">Sign Up</h1>
          <p className="text-sm text-gray-500 mt-1">
            Join the Al Dosari Reserve Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#1f3d2b]"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#1f3d2b]"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#1f3d2b]"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#1f3d2b]"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone / WhatsApp
            </label>
            <input
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              type="text"
              placeholder="+966 xxx xxx xxx"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-[#1f3d2b]"
            />
            {errors.contact && (
              <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1f3d2b] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#173023] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Button */}
        <button
          type="button"
          className="w-full border border-gray-300 text-[#1f3d2b] py-2.5 rounded-lg text-sm font-medium hover:bg-gray-100 transition mt-2"
        >
          Already have an account? Login
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-3">
          By signing up, your account will be reviewed by the admin.
        </p>
      </div>
    </div>
  );
};

export default SignUp;




