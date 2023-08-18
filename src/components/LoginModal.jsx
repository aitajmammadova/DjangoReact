import React from 'react';
import { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import axios from 'axios';
import {  useDispatch } from 'react-redux';
import { login } from '../store/features/authSlice';

const LoginModal = ({
  handleLogin,
  handleSignUp,
  handleSignUpExit
 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  
  const dispatch=useDispatch()

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/', { email, password });
      const { access, refresh } = response.data.token;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      dispatch(login())
    } catch (error) {
      setError('Invalid email or password');
    }
  
  }
  return (
    <div className="login-wrapper">
      <div className="login-input">
        <form method='post' onSubmit={handleSubmit}>
        <div className="login-input-head">
            <div className="org">Organick</div>
            <div className="login-input-head-title">
              <p>Welcome Back</p>
              <p className="p login_p">Login in with your email address and password</p>
            </div>
        </div>

        <div className="login-input-title">

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
              type="email"
              required
              placeholder="Enter your email..." />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id='password'
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
            </div>
          </div>

          <div className="login-button">
            <button type="submit">Sign In</button>
          </div>
          
        </div>

        </form>
        <div className="sign-up" onClick={handleSignUp}>
          <p>Don't have an account?</p>
          <p className="blue-sign">Sign Up</p>
        </div>
        {/* <div className="sing-up" onClick={handleSignUpVendor}>
          <p>Vendor create account</p>
          <p>Sign Up</p>
        </div> */}
      </div>
        <div className="login-img">
          <img src={"/static/login.jpg"} alt="" />
        <div onClick={handleSignUpExit}>
            <CiCircleRemove />
          </div>

       
      </div>
      {error && <p>{error}</p>}
    </div>

  );
};

export default LoginModal;
