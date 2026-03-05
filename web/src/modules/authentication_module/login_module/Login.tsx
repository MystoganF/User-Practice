import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // No functionality yet (UI only)
  };

  return (
    <div className="login-page">

      {/* Logo */}
      <div className="company-logo">
        <div className="logo-circle">
          <span className="logo-text">CL</span>
        </div>
        <h1 className="company-name">Kean</h1>
      </div>

      {/* Left Branding Section */}
      <div className="login-brand-section">
        <div className="brand-content">
          <div className="welcome-text">
            <h2>Welcome Back!</h2>
            <p>Log in to access your account and enjoy exclusive features.</p>
          </div>
        </div>
      </div>

      {/* Right Login Form */}
      <div className="login-form-section">
        <div className="form-container">

          <div className="form-header">
            <h1>Login</h1>
            <p className="form-subtitle">
              Enter your credentials to continue.
            </p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>

            {/* Username */}
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
            >
              LOGIN
            </button>

            {/* Footer Links (UI only) */}
            <div className="form-footer">
              <span className="signup-link">
                New User? Sign Up
              </span>

              <span className="forgot-link">
                Forgot your password?
              </span>
            </div>

          </form>

          <div className="feature-text">
            <p>Securely access your account anytime, anywhere.</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Login;