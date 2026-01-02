import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "", email: "", password: "", confirmPassword: "", contact: ""
  });
  const [err, setErr] = useState({});

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const eObj = {};

    if (!data.name) eObj.name = "Required";
    if (!data.email) eObj.email = "Required";
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(data.password))
      eObj.password = "Weak password";
    if (data.password !== data.confirmPassword)
      eObj.confirmPassword = "Mismatch";
    if (!/^\+\d{9,15}$/.test(data.contact))
      eObj.contact = "Invalid number";

    setErr(eObj);
    if (Object.keys(eObj).length) return;

    localStorage.setItem("user", JSON.stringify(data));
    alert("✅ Signup successful!");
    navigate("/login");
  };

  const Input = ({ name, type, label, placeholder, className }) => (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={data[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className={`
          w-full rounded-xl border border-gray-300 px-4 py-3 text-sm
          focus:ring-2 focus:ring-[#00627B] focus:border-[#00627B]
          transition ${className || ""}
        `}
      />
      {err[name] && <p className="text-xs text-red-600 mt-1">{err[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen w-full mt-16 flex items-center justify-center bg-gradient-to-br from-[#e6f2f6] to-[#f9fcfd] px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8">

        {/* Accent */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00627B] to-[#00a0c6]" />

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#00627B]">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Join Al Dosari Reserve Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input name="name" type="text" label="FULL NAME" placeholder="John Doe" />
          <Input name="email" type="email" label="EMAIL ADDRESS" placeholder="you@example.com" />
          <Input name="password" type="password" label="PASSWORD" placeholder="Create password" />
          <Input name="confirmPassword" type="password" label="CONFIRM PASSWORD" placeholder="Re-enter password" />
          <Input name="contact" type="text" label="PHONE / WHATSAPP" placeholder="+966XXXXXXXXX" />

          <button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-[#00627B] to-[#008db0]
                       text-white py-3 rounded-xl text-sm font-semibold
                       hover:shadow-lg hover:scale-[1.01]
                       active:scale-[0.98] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-200" />
        </div>

        {/* Footer */}
        <div className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-semibold cursor-pointer text-[#00627B] hover:underline"
          >
            Already have an account? Login
          </button>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
