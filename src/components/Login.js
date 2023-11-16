import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginStyle.css';
import Header from './header/Header';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      window.alert("Logged in successfully:" + user.email);

      // Redirect based on user type
      if (user.email === 'admin@example.com') {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error('Login error:', error.message);
      window.alert("Error logging in: " + error.message);
    }
  };

  return (
    <div>
      <Header/>
    <div className='login-page'>
        <h1 className='h1'>Login Page:</h1>
        

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
      </div>
    </div>
  );
};

export default Login;