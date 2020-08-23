import React from 'react';
import Auth from "../styledElements/Auth";
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";

const AuthScreen = () => {
    const [state, setState] = React.useState("sign up");
    const handleChange=(e)=>{
        setState(e.target.textContent.toLowerCase());
    };
    return (
        <Auth>
            <div className="switch">
                <button 
                    onClick={handleChange}
                >
                    Sign up
                </button>
                <button 
                    onClick={handleChange}
                >
                    Login
                </button>
            </div>
        
            {state === "login" ? <Login/> : <Signup/>}
        </Auth>
    );
};

export default AuthScreen;
