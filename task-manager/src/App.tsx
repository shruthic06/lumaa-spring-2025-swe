import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/pages/Login';
import Tasks from './components/pages/Tasks';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
