import initializeAuthentication from "../Firebase/Firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err.message));
  };

  // observe user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  // signout
  const logOut = () => {
    signOut(auth).then(() => {});
  };
  return {
    signInGoogle,
    user,
    logOut,
  };
};

export default useFirebase;
