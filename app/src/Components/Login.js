import "./login.css"
import {FaUserAlt} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-wrapper">
        

        <div className="login">
            <p className="login-text">Log in To Octave Talent</p>

            <div className="input-wrapper">
                <FaUserAlt className="username"/>
                <input placeholder="Username/Email"  className="input"/>
            </div>

            <button className="login-btn" id="email-btn">Continue with Email</button>

            <p className="middle-text"><span>or</span></p>

            <button className="login-btn" id="google-btn"><FaGoogle className="google-icon"/><span className="google-text">Continue with Google</span></button>

            <button className="login-btn" id="facebook-btn"><FaFacebook className="facebook-icon"/><span className="facebook-text">Continue with Facebook</span></button>
        </div>
        <div className="signup">
            <p><span>Don't have an account?</span></p>

           <Link to = '/'><button >Sign Up</button></Link> 
        </div>
    </div>
  )
}

export default Login