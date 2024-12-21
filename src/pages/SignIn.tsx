import React, { useState } from "react";
import { useAppDispatch } from "../Redux/hooks";
import axios from "axios";
import { setToken } from "../Redux/features/AuthSlice";
import { useNavigate } from "react-router-dom";
import "../tailwind.css";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      let url = "/login";
      const response = await axios.post(url, {
        username,
        password,
      });
      localStorage.setItem("userData", JSON.stringify(response.data));
      dispatch(setToken(response.data));
      setUsername("");
      setPassword("");
      response.data?.user?.role === "Admin"
        ? navigate("/admin")
        : navigate("/company");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="mx-auto w-[40vw] space-y-6">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center">
          Enter your credentials to access your account
        </p>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Email Id
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-black text-white rounded-md"
        >
          {loading ? "Loading..." : "SignIn"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
