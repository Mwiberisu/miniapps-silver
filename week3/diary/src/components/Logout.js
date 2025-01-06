import { useEffect } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router";

function Logout() {
  let navigate = useNavigate();

  useEffect(() => {
    auth.signOut();
    alert("Logout successful");
    navigate("/login");
    return () => {};
  });
}

export default Logout;
