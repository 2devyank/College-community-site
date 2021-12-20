import React, { useState } from 'react';

function Register({toggleAuth}) {
    return (
        <div className="Register">
            This is register component
            <div className="container justify-content-center">
                <div className="row align-items-centre">
                    <div className="col-3 Login-Button">
                        <button onClick={() => toggleAuth(true)}>LOGIN</button>
                    </div>
                    <div className="col-3 SignUp-Button">
                        <button>SIGN UP</button>
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
                        <input type="submit" value='Submit'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
