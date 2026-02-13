import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./style.css"
function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>User Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <button className="logout" onClick={() => setUser(null)}>
        Logout
      </button>
    </>
  );
}

export default UserProfile;
