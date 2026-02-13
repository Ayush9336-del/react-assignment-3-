import React, { useState } from "react";
import { UserContext } from "./UserContext";
 
import UserProfile from "./UserProfile";
import "./style.css";
import Login1 from "./Login1";

function Main() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="app">
        <h1>User Context Demo</h1>
        {user ? <UserProfile /> : <Login1/>}
      </div>
    </UserContext.Provider>
  );
}

export default Main;
