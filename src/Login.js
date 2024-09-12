import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import avatar from './images/avatar.png'; // Import the avatar image from the src folder

const Login = () => {
  // State to store the username and password entered by the user
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Verify the credentials
    if (username === 'admin@gmail.com' && password === 'password') {
      // If the credentials are correct, navigate to the dashboard
      navigate('/dashboard');
    } else {
      // If the credentials are incorrect, display an alert message
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Left section that displays the avatar image */}
      <div className="login-left">
        <img src={avatar} alt="Avatar" /> {/* Use the imported avatar image */}
      </div>

      {/* Right section that contains the login form */}
      <div className="login-right">
        <h1>Log in</h1>
        <p>Welcome Back! Log in to be redirected to the Dashboard.</p>

        {/* Login form with email and password fields */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Let's start!</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
