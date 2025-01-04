import React, { useState } from "react";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    try {
      if (!email) {
        alert("Please enter a valid email");
        return;
      }

      if (!password) {
        alert("Please enter a valid password");
        return;
      }

      alert("Login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <h1>Sign In </h1>
      <input
        type="email"
        name="email"
        placeholder="mwiberi@diary.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="......"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default Login;
