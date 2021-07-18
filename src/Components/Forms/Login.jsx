import React, { useState, useContext } from 'react'
import "./form.css"
import { Link, useHistory } from "react-router-dom";
import { usercontext } from '../Contexts/usercontext';
import { useEffect } from 'react';
function Login() {
    const { user, setuser, userexist, setuserexist } = useContext(usercontext);
    const history = useHistory();
    const [error, seterror] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const submit = async (e) => {

        e.preventDefault();
        const res = await fetch("https://hashhub-backend.herokuapp.com/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        if (res.status === 200) {
            const result = await res.json();
            setuser(result.user);
            setuserexist(true);
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('userexist', userexist);
            history.push('/')
        } else {
            const result = await res.json();
            seterror(result.message);
        }
    }
    return (
        <div class="login_register">
            <div className="left">
                <a href="#">Hash/Hub</a>
                <img src="https://pratibharana.com/wp-content/uploads/2021/04/web-development-banner.jpg" alt="" />
                <h3>Hash/Hub is here to provide everything that revolves around your engineering degree.</h3>
            </div>
            <div className="right">
                <h2>Welcome</h2>
                <h4>Sign in to your Account</h4>
                <div className="inputfields">
                    <p>Username</p>
                    <input type="text" autoComplete="true" value={email} onChange={e => setemail(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Password</p>
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} />
                </div>
                <button onClick={submit} >Login</button>
                <p className="para">{error}</p>
                <p className="para">Not have account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login
