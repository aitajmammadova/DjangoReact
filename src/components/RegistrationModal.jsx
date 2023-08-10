import { useEffect } from "react";

import { CiCircleRemove } from "react-icons/ci";
import React from "react";
import axios from 'axios'
import { useState } from "react";
const RegistrationModal = ({
  handleSignUpExit,
  setDataFormInput,
  dataFormInput,
  setDataForm,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [responseMessage, setResponseMessage] = useState('');



  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if password and passwordConfirm match
    if (password !== passwordConfirm) {
      setResponseMessage('Passwords do not match');
      return;
    }

    const registrationData = {
      email: email,
      password: password
    };
    fetch('http://127.0.0.1:8000/api/accounts/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    })
      .then(response => response.json())
      .then(data => {
        // Handle API response (success or error)
        setResponseMessage(data.message);
      })
      .catch(error => {
        // Handle error
        console.error('Registration error:', error);
      });
  }


  return (
    <div className="login-wrapper">
      <div className="login-input">
        <form  method='post' onSubmit={handleSubmit}>
          <div className="login-input-head">
            <div className="org">Buyer Registration</div>
            <div className="login-input-head-title">
              <p>Welcome Back</p>
              <p>Login in with your email address and password</p>
            </div>
          </div>
          <div className="login-input-title">
    
            <div className="registr_email">
              <label htmlFor="email">Enter your email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                value={email}
                type="email"
                placeholder="Enter your email..."
              />
            </div>

            <div>
              <label htmlFor="password">Create your password</label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="Create your password..."
              />
            </div>
            <div>
              <label htmlFor="passwordConfirm">Confirm your password</label>
              <input
                onChange={(e) => setPasswordConfirm(e.target.value)}
                id="passwordConfirm"
                name="password"
                value={passwordConfirm}
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className="login-remember">
              <input type="checkbox" name="Remember me" id="" />
              <label htmlFor="">Remember me</label>
            </div>
          </div>
          <div className="login-button">
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
      <div className="login-img">
        <img src='static/reg1.jpg' alt="" />
        <div onClick={handleSignUpExit}>
          <CiCircleRemove />
        </div>
      </div>

    </div>
  );
};

export default RegistrationModal;
