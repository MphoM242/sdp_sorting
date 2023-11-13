/*import React, {useState} from 'react';
//import {  signInWithEmailAndPassword   } from 'firebase/auth';
//import { auth } from './Firebase';
import { NavLink, useNavigate } from 'react-router-dom'
//import {auth} from 'firebase/app';
//import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = async() => {
        const auth = getAuth();
        try{
        await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        window.alert("Logged in successfully:"+ user.email);
        navigate("/");
        }
        catch(error){
            console.log("Login error: ",error.message);
            window.alert("Error logging in: "+error.message);
        }
        /*e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/");
            console.log(user);
            window.alert("Logged in successfully:"+ user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            //window.alert("Error logging in"+user.email)
        });*/

   /* };
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <p> Sorting Plugin </p>                       
                                                       
                        <form>                                              
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login*/

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