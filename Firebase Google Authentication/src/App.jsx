import { useState } from "react";
import "./App.css";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "./FireBase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  //sign out button

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        // Sign-out successful.
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("Error");
      });
  };

  return (
    <>
      <h4> Firebase Google Authentication</h4>
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h4>Name : {user.displayName}</h4>
          <h4>Email : {user.email}</h4>
        </div>
      )}
      {user ? (
        <button onClick={handleSignOut}>
        <img src="Firebase Google Authentication\src\icons8-google.svg" alt="" />
        Sign Out
      </button>
      ) : (
        <button onClick={handleSignIn}>{""} <img src="Firebase Google Authentication\src\icons8-google.svg" alt="" />Google Sign In</button>
      )}
    </>
  );
}


export default App;
