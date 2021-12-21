import React, { useState } from 'react';
import '../../styles/Login.css'
function Login({toggleAuth}) {
    return (
        <div className="Login">
            <div className="container justify-content-center login-contain">
                <div className="row toggle-row">
                    <div className="col-6 Login-Button">
                        <div className='ActiveToggle togButtons'>LOGIN</div>
                    </div>
                    <div className="col-6 SignUp-Button">
                        <div className='togButtons' onClick={() => toggleAuth(false)}>SIGN UP</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className='col-12'>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className='col-12'>
                        <input className='Submit-Button' type="submit" value='Submit'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
