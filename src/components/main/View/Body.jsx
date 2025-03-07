// Body.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/authContext";

function Body() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div className="body" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {currentUser ? (
        <>
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid #4A90E2",
              }}
            />
          ) : (
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                backgroundColor: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#666",
              }}
            >
              {currentUser.displayName ? currentUser.displayName[0] : "?"}
            </div>
          )}
          <p>
            {currentUser.displayName ? `Welcome, ${currentUser.displayName}!` : `Your email: ${currentUser.email}`}
          </p>
        </>
      ) : (
        <p>Redirecting to login...</p>
      )}
    </div>
  );
}

export default Body;