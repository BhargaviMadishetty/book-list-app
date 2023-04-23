import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div id="login-container">
            <h2 className="login">Member Login</h2>
            <input id="username" type="text" placeholder="Username" /><br />
            <input id="password" type="password" placeholder="Password" /> <br />
            <Link to="/all"><button id="login">LOGIN</button></Link>
            <p>Don't have an account ? <Link to="/register"><span id="signup">Register</span></Link></p>
        </div>
    );
}

export default Login;