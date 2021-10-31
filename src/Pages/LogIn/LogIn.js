import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';

import initializeAuthentication from './Firebase/Firebase.init';

initializeAuthentication()

const LogIn = () => {
    const {signInUsingGoogle,  user, handleLogin, handleEmailChanged, handlePassChanged, error } = useAuth();

    const location = useLocation();
    const redirect_uri = location.state?.from || '/'
    const history = useHistory();

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    
    return (
        <div id="logIn">
            <div>
            <h2>please login with your registered email</h2>
            

        
        <form onSubmit={handleLogin}>
        <input onChange={handleEmailChanged} type="email" name="email" placeholder="enter your email"/>
            <br />
            <br />
            <input onChange={handlePassChanged} type="password" name="password" placeholder="enter your password"/>
          
            <input type="submit" className="submit" value="login"/>
      </form>
      {/* <button onClick={() => window.location.reload(false)}>Please reload to log in properly</button> */}
      {
        error? <p className="text-danger">incorrect pass and email</p> : <p className="text-success">pass and email has to be matched</p>
      }
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
            <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sign in</button>
            <br />
            <Link to="/register">New here?</Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default LogIn;