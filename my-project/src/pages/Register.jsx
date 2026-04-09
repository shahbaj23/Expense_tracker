import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { registerUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all the fields");
      return;
    }

    if(formData.password.length < 8){
        alert("Password must be at least 8 characters long");
        return;
    }

    await registerUser(formData);

    navigate("/login");

    setFormData({
      fullname: "",
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white border border-gray-400 p-3 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Registeration</h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-80 rounded-sm">
          <label htmlFor="">Full Name: </label>
          <input
            className="border outline-none border-gray-400 p-1"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />

          <label>Username:</label>
          <input
            className="border outline-none border-gray-400 p-1"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="">email</label>
          <input
            className="border outline-none border-gray-400 p-1"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="">Password:</label>
          <input
            className="border outline-none border-gray-400 p-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-blue-500 py-1 cursor-pointer my-4 text-white"
          >
            Register
          </button>
        </form>

        <div><span>Already have an account? </span>
          <Link className="text-blue-500 underline" to={"/login"}>login</Link>
        </div>
      </div>
    </div>
  );
}
