import React, { useState } from "react";
import { registerUser } from "../../api/authApi";
import Button from "../../components/ui/Button";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerUser(formData);
    alert("User registered");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 overflow-y-hidden ">
      
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center pt-[30px] mb-[80px]"
      >
        {/* Main Heading */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-[30px]">
          Welcome, create your school account
        </h1>

        {/* Card */}
        <div className="w-[512px] max-h-[592px] bg-white rounded-lg shadow-sm
                        flex flex-col items-center px-[90px] pt-8 mb-[35px]">
          
          <p className="text-gray-500 text-[16px] text-center mb-8">
            It is our great pleasure to have you on board!
          </p>

          {/* Inputs */}
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
            className="w-[248px] border border-gray-300 rounded-md px-4 py-2
                       mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
            className="w-[248px] border border-gray-300 rounded-md px-4 py-2
                       mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-[248px] border border-gray-300 rounded-md px-4 py-2
                       mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-[248px] border border-gray-300 rounded-md px-4 py-2
                       mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="role"
            onChange={handleChange}
            className="w-[248px] border border-gray-300 rounded-md px-4 py-2
                       mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="w-[248px] h-[40px] bg-blue-600 text-white rounded-md
                       border border-blue-600 hover:bg-blue-700
                       transition font-medium"
          >
            Register
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-400  mt-4 pb-8">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
