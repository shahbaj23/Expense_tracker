import axios from "axios";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const registerUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        data,
      );

      if (response.data) {
        alert("Add successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        data,
      );

      let userData = response.data;
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
        }),
      );
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
