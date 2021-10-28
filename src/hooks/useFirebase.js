import initializeAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err.message));
  };
  return {
    signInGoogle,
    user,
  };
};

export default useFirebase;
