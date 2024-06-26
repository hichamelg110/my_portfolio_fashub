import React, { useState } from 'react';
import './Login.css';

function Login({ onClose, onLogin }) {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    const emailExists = Math.random() < 0.5;

    if (emailExists) {
      setStep('password');
    } else {
      setStep('newUser');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitting', { email, firstName, lastName, password });

    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    onLogin({ firstName, lastName, email, color });
  };

  return (
    <div className="login-container">
      <form onSubmit={step === 'email' ? handleEmailSubmit : handleSubmit} className="login-form">
        <button type="button" className="close-btn" onClick={onClose}>&times;</button>
        <h2>SIGN IN OR CREATE ACCOUNT</h2>
        {step === 'email' && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Continue</button>
          </>
        )}
        {step === 'newUser' && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </>
        )}
        {step === 'password' && (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Login;