import React from 'react';
import { useEffect, useState } from "react";
// import loginIcons from "../images/login.jpg";
import { CiCircleRemove } from "react-icons/ci";
import axios from 'axios';

const LoginModal = ({
  handleLogin,
  handleSignUp,
  handleSignUpVendor,
  dataForm,
  dataFormVendor,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', { email, password });
      // Handle the response, e.g., set user state or redirect to another page
    } catch (error) {
      // Handle error, e.g., display error message to the user
    }

  }
  return (
    <div className="login-wrapper">
      <div className="login-input">
        <div className="login-input-head">
          <div className="org">Organick</div>
          <div className="login-input-head-title">
            <p>Welcome Back</p>
            <p>Login in with your email address and password</p>
          </div>
        </div>

        <div className="login-input-title">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                type="email"
                required
                placeholder="Enter your email..." />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="text"
                placeholder="Password"
                required
              />
            </div>
            <div>
            <div className="login-remember">
              <input type="checkbox" name="Remember me" id="" />
              <label htmlFor="">Remember me</label>
            </div></div>

            <div className="login-button">
              <button type="submit">Sign In</button>
            </div>

          </form>
        </div>
        <div className="sing-up" onClick={handleSignUp}>
          <p>Buyer create account</p>
          <p>Sign Up</p>
        </div>
        {/* <div className="sing-up" onClick={handleSignUpVendor}>
          <p>Vendor create account</p>
          <p>Sign Up</p>
        </div> */}
      </div> 
      <div>
        <div className="login-img">
          <img src={"static/login.jpg"} alt="" />
          <div onClick={handleLogin}>
            <CiCircleRemove />
          </div>
        </div></div>
      </div>
   
  );
};

export default LoginModal;
