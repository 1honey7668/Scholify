import { useState } from "react";
import { loginUser } from "../../api/authApi";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    localStorage.setItem("user", JSON.stringify(res.data));
    alert("Login successful");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
     
      <form
        onSubmit={handleSubmit}
        className="w-[549px] h-[480px] bg-white rounded-lg shadow-md
                   flex flex-col items-center justify-center px-10"
      >
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome, Log into your account
    </h1>

        <p className="text-sm text-gray-500 mb-8 text-center">
          It is our great pleasure to have you on board!
        </p>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2
                     mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2
                     mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md
                     hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
