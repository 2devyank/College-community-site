import React, { useState } from 'react';
function Register({toggleAuth}) {
    return (
        <div className="Register">
            <form action="/home">
            <div className="container-fluid">
                <div className="row toggle-row">
                    <div className="col-6 Login-Button">
                        <div className='togButtons' onClick={() => toggleAuth(true)}>LOGIN</div>
                    </div>
                    <div className="col-6 SignUp-Button">
                        <div className='ActiveToggle togButtons'>SIGN UP</div>
                    </div>
                </div>

                <div className='row align-items-center '>
                    <div className='col-1'>
                        <i class="fas fa-user"></i>
                    </div>
                    <div className='col'>
                        <input type="text" placeholder='Name'/>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div className='col'>
                        <input type="text" placeholder='Email'/>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i class="fas fa-key"></i>
                    </div>
                    <div className='col'>
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
                
                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i class="fas fa-key"></i>
                    </div>
                    <div className='col'>
                        <input type="password" placeholder='Confirm Password'/>
                    </div>
                </div>

                <div className='row align-items-center justify-content-center'>
                    <div className='col-11'>
                        <input className='Submit-Button' type="submit" value='Submit'/>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register
