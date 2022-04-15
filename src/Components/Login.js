import {FaUserAlt} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {BsFacebook} from "react-icons/bs";
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

            <p>or</p>

            <button className="login-btn" id="google-btn"><FaGoogle className="google-icon"/><span className="google-text">Continue with Google</span></button>

            <button className="login-btn" id="facebook-btn"><BsFacebook className="facebook-icon"/><span className="facebook-text">Continue with Facebook</span></button>
        </div>
        <div className="signup">
            <p>Don't have an Octave Talent account?</p>

            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Login