import React from 'react';
import Add from "../img/addAvatar.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <button>Sign in</button>
                </form>
                <p>
                    You don't have an account? <Link to='/register'>Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;