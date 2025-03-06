import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";

function Body() {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Hook to navigate
  const { currentUser } = useAuth();


  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="body">
      {currentUser ? (
        <p>Your email is: {currentUser.displayName ? currentUser.displayName : currentUser.email}</p>
      ) : (
        <p>Redirecting to login...</p> // Optional: Show a message before redirecting
      )}
    </div>
  );
}

export default Body;