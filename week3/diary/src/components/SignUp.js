import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (!email) {
        alert("Please enter a valid email");
        return;
      }

      if (!password) {
        alert("Please enter a valid password");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      alert(`Account with username ${email} created successfully`);
      navigate("/deardiary");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup">
      <h1>Sign Up </h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
