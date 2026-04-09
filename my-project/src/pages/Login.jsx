import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        formData,
      );

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        alert("Login successfully");
      }

      navigate("/");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data);
      if (error.toLowerCase().includes("password")) {
        alert("Invalid password");
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white border border-gray-400 p-3 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-80 rounded-sm">
          <label>Username:</label>
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
            Login
          </button>
        </form>
        <div>
          <span>New User? </span>
          <Link className="text-blue-500 underline" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
