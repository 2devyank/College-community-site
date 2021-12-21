import React, { useState } from 'react';
import '../../styles/Register.css'
function Register({toggleAuth}) {
    return (
        <div className="Register">
            <div className="container justify-content-center register-contain">
                <div className="row toggle-row">
                    <div className="col-6 Login-Button">
                        <div className='togButtons' onClick={() => toggleAuth(true)}>LOGIN</div>
                    </div>
                    <div className="col-6 SignUp-Button">
                        <div className='ActiveToggle togButtons'>SIGN UP</div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className='col-12'>
                        <input type="text" placeholder='Email'/>
                    </div>
                    <div className='col-12'>
                        <input type="password" placeholder='Password'/>
                    </div>
                    <div className='col-12'>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
                    <div className='col-12'>
                        <input className='Submit-Button' type="submit" value='Submit'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
