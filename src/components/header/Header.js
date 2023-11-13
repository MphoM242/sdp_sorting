// Header.js
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
//import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { NavLink,useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    const auth = getAuth();
    //get user name:
    const user = auth.currentUser;

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
      console.log("Signed out successfully");
      window.alert("Signed out successfully:"+user.email);
    }).catch((error) => {
      // An error happened.
      console.log("sign out error", error);
      window.alert("sign out error"+user.email);
    });
  }

  return (
    <div>
      <h1>Sorting Algorithm PlugIn</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;