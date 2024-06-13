import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/Signuppage';
import LoginPage from './components/Loginpage';
import HomePage from './components/Homepage';
import BlogPage from './components/Blogpage';

function App() {
  return (
    <Router>
      <div>
        <h1>User Authentication</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
