import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import Tasks from "./components/pages/Tasks";
import "./App.css";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Router>
      <div className="App">
        {token && (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
        <Routes>
          {/* ✅ Fix: Pass setToken using an inline function */}
          <Route path="/" element={token ? <Navigate to="/tasks" /> : <Login setToken={(t) => setToken(t)} />} />
          <Route path="/tasks" element={token ? <Tasks /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
