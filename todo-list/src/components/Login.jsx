import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://94.74.86.174:8080/api/login", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <motion.div
        className="bg-white p-10 rounded-xl shadow-lg w-full sm:w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Register here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
