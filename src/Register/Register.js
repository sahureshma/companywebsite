import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../assest/Logo design (1).png";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

    if (!validateEmail(formData.email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!validatePassword(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 symbol."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      const existingUserData = JSON.parse(localStorage.getItem(formData.email));
      if (existingUserData) {
        alert("User already registered with this email.");
      } else {
        localStorage.setItem(formData.email, JSON.stringify(formData));
        alert("Sign-Up Successful");
        navigate("/");
      }
    }
  };

  const handleSignInClick = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Why Register?</h1>
        <p>
          Access expert stock research, personalized <br />insights, and market tools.
          <br />
          <br />
          Track your portfolio and make informed <br />investment decisions with our analytics.
          <br />
          <br />
          Get exclusive tips, reports, and updates straight <br />from industry experts.
        </p>
      </div>
      <div className="login-right">
        <div className="login-box">
          <img src={logo} alt="FinanceShastra Logo" className="logo" />
          <h2>Create Your FinanceShastra Account</h2>
          <p>Join us on your journey to smarter investing and better financial planning.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container">
              <label>Email Address*</label>
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className={passwordError ? "input-error" : ""}
                />
                <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              {passwordError && <span className="error-text">{passwordError}</span>}
            </div>
            <button type="submit" className="sign-in-btn">
              Register
            </button>
          </form>
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
              Already registered?{" "}
              <a href="#" onClick={handleSignInClick} className="sign-in-link">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
