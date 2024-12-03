import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://94.74.86.174:8080/api/register",
        {
          email,
          username,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-600 flex justify-center items-center">
      <motion.div
        className="bg-white p-10 rounded-xl shadow-lg w-full sm:w-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Register
        </h2>

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <a href="/" className="text-teal-600 font-semibold hover:underline">
              Login here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
