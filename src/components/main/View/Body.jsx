import React from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from '../../../contexts/authContext';

function Body() {
  const location = useLocation();
  const { email, password } = location.state || {};
  const { currentUser } = useAuth()

  return (
    <div className="body">
      <p>Your email is: {currentUser.email}</p>
      <p>Your email is: {currentUser.location}</p>
      <p>Your password is: {currentUser.password}</p>
      <p>Your password is: {password ? password : "Password not available"}</p>
      <p>Your password is: {currentUser.displayName ? currentUser.displayName : currentUser.email}</p>
    </div>
  );
}

export default Body;