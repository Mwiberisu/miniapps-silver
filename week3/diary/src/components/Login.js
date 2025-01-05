import React, { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      if (!email) {
        alert("Please enter a valid email");
        return;
      }

      if (!password) {
        alert("Please enter a valid password");
        return;
      }
      const login_response = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = login_response.user;

      alert(`Login for user ${user.email} successful`);
      navigate("/deardiary");
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
