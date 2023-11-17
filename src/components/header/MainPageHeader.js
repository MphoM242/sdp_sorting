// Header.js
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import '../MainPageStyle.css';
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

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  }

  const goNext = () => {
    navigate(+1);
  };

  return (
    <div>
      
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <div class="heading">
          <h1> DATA STRUCTURES & ALGORITHMS: </h1>
        </div>

        <div class="logout-btn"> 
          <button onClick={handleLogout}>Logout</button>  
        </div>  

      </div>
      
      <div class="main-heading-sort">
        <h1> SORTING </h1>
      </div>
        
        
    </div>

    
  );
};

export default Header;