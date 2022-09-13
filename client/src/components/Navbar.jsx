import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../style.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                     alt=""/>
                <span style={{padding: '5px 0',}}>John</span>
                <button onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    );
};

export default Navbar;