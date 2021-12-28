import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from './../../firebase';
const auth = getAuth();


function Register({toggleAuth}) {
    
    function createuser(e){
        e.preventDefault();
        let password = e.target.password.value;
        if(e.target.password.value.length < 6){
            alert("Password too short");
            return;
        }
        if(e.target.password.value != e.target.confirmPassword.value){
            alert("Password Mismatch");
            return;
        }

        let email = e.target.email.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //after user created
            updateProfile(auth.currentUser, {
                displayName: e.target.name.value
            }).catch((error) => {
                console.log(error);
            });

            sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("Verification Mail Sent")
            });

            const usernew = userCredential.user;
            console.log(usernew);
            toggleAuth(true);
        })
        .catch((error) => {
            console.log(error);
        });

    }

    return (
        <div className="Register">
            <form onSubmit={createuser}>
            <div className="container-fluid auth-container">
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
                        <i className="fas fa-user"></i>
                    </div>
                    <div className='col'>
                        <input type="text" name='name' placeholder='Name' required/>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className='col'>
                        <input type="text" name='email' placeholder='Email' required/>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i className="fas fa-key"></i>
                    </div>
                    <div className='col'>
                        <input type="password" name="password" placeholder='Password' required/>
                    </div>
                </div>
                
                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i className="fas fa-key"></i>
                    </div>
                    <div className='col'>
                        <input type="password" name='confirmPassword' placeholder='Confirm Password' required/>
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
