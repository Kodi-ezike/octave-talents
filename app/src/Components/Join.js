import "./join.css";
import { Link } from "react-router-dom";
import  { useState }from "react";

const Join = () =>{
    const [state, setState] = useState("");
    const handleState = (e) => {
        setState(e.target.value);
    }

      return (
        <div className="join-wrapper">
            <p className="join-text">Join as a client or freelancer</p>
            <form>
                <div className="options">
                    <div className="option">
                        <input type='radio' value="client" name="option" onChange={handleState} />
                        <p>I’m a client, hiring for a project</p>
                    </div>
                    <div className="option">
                        <input type='radio' value="freelancer" name="option" onChange={handleState}  />
                        <p>I’m a freelancer, looking for work</p>
                    </div>
                </div>
        
            <Link to = {`/${state}`} ><button className="create-btn" type="button" onClick={()=>{if(state === ""){ alert("Please choose an option") }}} >Create Account</button> </Link>
            </form>   
            
            <p className="login-direct">Already have an account? <Link to="/login" className="log">Log In</Link> </p>
        </div>
      )
}
export default Join