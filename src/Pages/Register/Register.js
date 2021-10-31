import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, updateProfile } from "firebase/auth";
import initializeAuthentication from '../LogIn/Firebase/Firebase.init';
import Footer from '../Footer/Footer';


initializeAuthentication();

//Amir 
const Register = () => {
    const {signInUsingGoogle} = useAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [error, setError] = useState("")
    const [pass, setPass] = useState("");
    const [user, setUser] = useState({});


    const auth = getAuth();
    const handleEmailChanged = (e) => {
        setEmail(e.target.value)
      }
    const handleNameChanged = (e) => {
      setName(e.target.value)
    }
    
      const handlePassChanged = (e) => {
        
        if( e.target.value < 6) {
          console.log("error 404")
        }else {
          setPass(e.target.value)
        }
       
      }


      const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, pass)
          .then((result) => {
            const {email} = result.user;
            const userInfo = {
              email: email,
            };
            setUser(userInfo)
            verifyEmail()
            setUserName();
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    


      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setError("");
          }
        });
      }, []);

      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result)
        })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
          .then(res=> {})
      }
    return (
        <div className="mt-5">
          <h1>Join us for free!!!</h1>

            {user.email?  <h2>The registered email is: {user.email}</h2>:
                    <h2>Register with a valid email</h2>}
      <div className="login">
        <div className="login-box">
        
          
          <form onSubmit={handleRegister}>
            <input type="text" onBlur={handleNameChanged} className="txt" placeholder="your name"/>
            <br />
            <input onChange={handleEmailChanged} type="email" name="email" placeholder="enter your email"/>
            <br />
       
            <input onChange={handlePassChanged} type="password" name="password" placeholder="enter your password"/>
            <br />
            <br />
            <input type="submit" className="submit" value="register"/>
          </form>
        </div>
      </div>

            





            {/* <form>
                <input type="email" name="" id=""  placeholder="your email"/>
                <br />

                <input type="password" name="" id=""  placeholder="your password"/>
                <br />

                <input type="submit" value="Submit"/>
                <br />
                <br />

            </form> */}
            <p>----------OR---------</p>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign up</button>
            <br />
            
            <Link to="/login">
            <p>already got an account?</p>
            </Link>


        
        </div>
    );
};

export default Register;