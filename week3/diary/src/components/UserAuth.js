import { useState, useEffect } from "react";
import { auth } from "./firebase";

export function UserAuth() {
  const [authState, setAuthState] = useState({
    isSignedIn: false,
    user: null,
  });

  useEffect(() => {
    const unregisterAuthObserver = auth.onAuthStateChanged((user) =>
      setAuthState({ user: user, isSignedIn: !!user })
    );
    return () => unregisterAuthObserver();
  }, []);

  return { auth, ...authState };
}
