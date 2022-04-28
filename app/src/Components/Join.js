import "./join.css";
import { Link } from "react-router-dom";
const Join = () => {
  return (
    <div className="join-wrapper">
        <p className="join-text">Join as a client or freelancer</p>

        <div className="options">
            <div className="option">
                <input type='radio' id="client" name="client"/>
                <p>I’m a client, hiring for a project</p>
            </div>
            <div className="option">
                <input type='radio' id="freelancer" name="client"/>
                <p>I’m a freelancer, looking for work</p>
            </div>
        </div>
        
        <button>Create Account</button>

        <p>Already have an account? <Link to="/login">Log In</Link> </p>
    </div>
  )
}

export default Join