import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Checklist from "./components/Checklist";

const App = () => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login page */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Route for Register page */}
        <Route path="/register" element={<Register />} />

        {/* Protected route for Checklists, only accessible if token exists */}
        <Route
          path="/checklists"
          element={token ? <Checklist /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
