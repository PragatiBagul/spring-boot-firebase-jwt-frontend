
import {Button} from "@mui/material";
import {Google} from "@mui/icons-material";
import {GoogleAuthProvider,signInWithPopup,signOut,currenUser} from "firebase/auth";
import {auth} from "./firebaseConfig";
import { useState } from "react";
import request from "./Request";
const Login = () => {
  const [isSignedIn,setIsSignedIn] = useState(false);
  const [user,setUser] = useState();

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then((result)=>{
      // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const idToken = credential.idToken;
    setUser(result.user);

    const requestUrl = 'http://localhost:8080/api/user';
    const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: idToken,
  };
  const response = request(requestUrl, options);

  console.log("Sign In Completed : Response is : "+response);
    setIsSignedIn(true);
    // ...
    }).catch((error) => {
      // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
  }
  const SignOut = () => {
    signOut(auth)
    .then(() => {
      setIsSignedIn(false);
    })
    .then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
  }

  const getDetails = () => {
    const requestUrl = 'http://localhost:8080/api/user/test';
    const options = {
    method: 'GET',
  };
  const response = request(requestUrl, options);
  console.log(response);
  }
  return (
    <>
    {!isSignedIn && <Button onClick={signIn}>Sign In <Google/></Button>}
    {isSignedIn && <Button onClick={getDetails}>Get Details</Button>}
    </>
  );
}

export default Login;
