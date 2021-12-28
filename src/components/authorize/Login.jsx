import React, { useState } from 'react';
import '../../styles/Auth.css'
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from './../../firebase';
import { useNavigate } from 'react-router-dom';
const auth = getAuth();

function Login({toggleAuth}) {
    const navigate = useNavigate();
    
    function loginuser(e){
        e.preventDefault();
        let password = e.target.password.value;
        if(e.target.password.value.length < 6){
            alert("Password too short");
            return;
        }
        let email = e.target.email.value;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            if(!user.emailVerified){
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert("Account not verified. Verification Mail Sent Again.")
                    return;
                });
            }
            else{
                navigate('/home');
            }
        })
        .catch((error) => {
            if(error.code === 'auth/user-not-found'){
                alert("User Not Registered");
                return true;
            }
            console.log(error);
        });

    }

    return (
        <div className="Login" id='Login'>
            <form onSubmit={loginuser}>
            <div className="container-fluid auth-container">
                <div className="row toggle-row">
                    <div className="col-6 Login-Button">
                        <div className='ActiveToggle togButtons'>LOGIN</div>
                    </div>
                    <div className="col-6 SignUp-Button">
                        <div className='togButtons' onClick={() => toggleAuth(false)}>SIGN UP</div>
                    </div>
                </div>

                <div className='row align-items-center'>
                    <div className='col-1'>
                        <i  className="fas fa-user"></i>
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
                        <input type="password" name='password' placeholder='Password' required/>
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

export default Login
