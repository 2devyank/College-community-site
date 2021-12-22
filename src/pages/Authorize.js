import Login from "../components/authorize/Login.jsx"
import Register from "../components/authorize/Register.jsx"
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import '../styles/Auth.css'
function Authorize() {
    const [AuthTog, toggleAuth] = useState(true);
    return (
        <div className="Authorize">
            
            { AuthTog && <Login
                    toggleAuth = {toggleAuth}
                /> }
            { !AuthTog && <Register 
                    toggleAuth = {toggleAuth}
                /> }
        </div>
    )
}

export default Authorize
