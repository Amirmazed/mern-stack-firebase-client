import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword,  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/LogIn/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    // const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    // const auth = getAuth();

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
//
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const handleEmailChanged = (e) => {
    setEmail(e.target.value)
  }
  
    const handlePassChanged = (e) => {
    
    if( e.target.value < 6) {
      console.log("error 404")
    }else {
      setPass(e.target.value)
    }
   
  }


  const handleLogin = (e) => {
    const auth = getAuth();
   
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      const {email} = result.user;
  
      const userInfo = {
        email: email,
      };
      setUser(userInfo);
      setUser("");
      window.location.reload(false)
    })
    .catch((error) => {
      setError(error.message);
    });

    
  
  };

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
            // .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleEmailChanged, handlePassChanged, handleLogin, error
    }
}

export default useFirebase;