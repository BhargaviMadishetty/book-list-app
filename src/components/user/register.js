import React, { useState } from "react";
import './register.css';
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword0] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    //console.log(username, password);


    return (
        <div id="register-container">
            <h2 className="register">Register</h2>
            <input id="username" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
            <input id="confirm-password" type="password" placeholder="Confirm Password" />
            <Link to="/"> <button id="register">REGISTER</button></Link>
            <Link to="/"><span id="signin">Member Login</span></Link>
        </div>
    );
}

export default Register;