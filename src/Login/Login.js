import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Eye icons
import logo from "./../assest/Logo design (1).png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPasswordStep, setIsResetPasswordStep] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 symbol.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid && !isForgotPassword) {
      const userRegistrationData = JSON.parse(localStorage.getItem(email));
      if (userRegistrationData && userRegistrationData.email === email) {
        if (userRegistrationData.password === password) {
          alert("Login Successful");
          navigate("/home");
        } else {
          setPasswordError("Incorrect password.");
        }
      } else {
        setEmailError("Email not found. Please register.");
      }
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true);
    setIsResetPasswordStep(false);
  };

  const handleForgotPasswordEmailSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      const userRegistrationData = JSON.parse(localStorage.getItem(email));
      if (userRegistrationData) {
        setIsResetPasswordStep(true);
        setEmailError("");
      } else {
        setEmailError("Email not found. Please register.");
      }
    } else {
      setEmailError("Enter a valid email address.");
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 symbol.");
      return;
    }

    const userRegistrationData = JSON.parse(localStorage.getItem(email));

    if (userRegistrationData) {
      userRegistrationData.password = newPassword;
      localStorage.setItem(email, JSON.stringify(userRegistrationData));
      alert("Your password has been reset successfully.");
      setIsForgotPassword(false);
      setNewPassword("");
    } else {
      alert("Email not found. Please register.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Login to FinanceShastra</h1>
        <p>Log in to continue your journey towards financial<br/> growth and informed investing.</p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <img src={logo} alt="FinanceShastra Logo" className="logo" />
          <h2>{isForgotPassword ? "Reset Your Password" : "Welcome Back to FinanceShastra"}</h2>
          <p>{isForgotPassword ? "Enter your registered email to reset password." : "Login to get started using FinanceShastra"}</p>
          
          {isForgotPassword ? (
            isResetPasswordStep ? (
              <form onSubmit={handleResetPassword}>
                <div className="input-container">
                  <label>New Password*</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className={passwordError ? "input-error" : ""}
                  />
                  {passwordError && <span className="error-text">{passwordError}</span>}
                </div>
                <button type="submit" className="sign-in-btn">Reset Password</button>
                <button type="button" className="cancel-btn" onClick={() => setIsForgotPassword(false)}>Cancel</button>
              </form>
            ) : (
              <form onSubmit={handleForgotPasswordEmailSubmit}>
                <div className="input-container">
                  <label>Email Address*</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={emailError ? "input-error" : ""}
                  />
                  {emailError && <span className="error-text">{emailError}</span>}
                </div>
                <div className="button-container">
    <button type="submit" className="sign-in-btn">Reset Password</button>
    <button type="button" className="cancel-btn" onClick={() => setIsForgotPassword(false)}>Cancel</button>
</div>
              </form>
            )
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Email Address*</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={emailError ? "input-error" : ""}
                />
                {emailError && <span className="error-text">{emailError}</span>}
              </div>
              <div className="input-container">
                <label>Password*</label>
                <div className="password-field">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={passwordError ? "input-error" : ""}
                  />
                  <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                  </span>
                </div>
                {passwordError && <span className="error-text">{passwordError}</span>}
              </div>
              <div className="login-options">
  <label>
    <input type="checkbox" /> Remember me
  </label>
  <a href="#" onClick={handleForgotPasswordClick} className="forgot-password-link">
    Forgot Password?
  </a>
</div>
              <button type="submit" className="sign-in-btn">Sign In</button>
            </form>
          )}

          <div className="login-or">Or Login With</div>
          <div className="social-login">
            <Button
              variant="outlined"
              className="Google-btn"
              startIcon={<FcGoogle />}
              component="a"
              href="https://accounts.google.com/signin"
            >
              Continue with Google
            </Button>
            <br />
            <br />
            <Button
              variant="outlined"
              className="Google-btn"
              startIcon={<FaLinkedin />}
              component="a"
              href="https://www.linkedin.com/feed/"
            >
              Continue with LinkedIn
            </Button>
          </div>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#" onClick={handleRegisterClick}>Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
