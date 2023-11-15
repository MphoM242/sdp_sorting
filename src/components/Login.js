import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'

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

  return (
    <div>
        <h1>Login:</h1>

      <div>
      <label htmlFor="email-address">
                                    Email address
                                </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;