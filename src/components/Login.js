import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import './LoginStyle.css';

const Login = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth(); // Get the auth instance
    try {
      await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        window.alert("Logged in successfully:"+ user.email);
        navigate("/");
      // User is now authenticated
    } catch (error) {
      console.error('Login error:', error.message);
        window.alert("Error logging in: "+error.message);
    }
  };

  const handleAdminRedirect = () => {
    // Redirect to admin.js or the admin route
    navigate("/admin");
  };

  return (
    <div>
    <div className='login-page'>
        <h1 className='h1'>Login Page:</h1>
        <p className='p'>Please enter your email address and password to login.</p>

      <div className='form'>
      <div>
      <label htmlFor="email-address"><b>Email address: </b></label>
        <input className='input' type="email" value={email} placeholder='me@gmail.com' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password"><b>Password: </b></label>
        <input className='input' type="password" value={password} placeholder='mypassword' onChange={(e) => setPassword(e.target.value)} />
      </div>
      </div>

      <button className='button' onClick={handleLogin}>LOGIN</button>

      <div className='admin-login'>
        <h2 className='h2'>Admin User?</h2>
        <p className='p'>Click below to redirect to admin page:</p>
         {/* Button to redirect to admin page */}
        <button className='admin-button' onClick={handleAdminRedirect}>Admin</button>
      </div>
      </div>
    </div>
  );
};

export default Login;