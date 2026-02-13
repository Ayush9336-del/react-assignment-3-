import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

function Login1() {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    setUser({
      name: name,
      email: email
    });
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login1;
