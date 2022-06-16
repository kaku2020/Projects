import { Link ,useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase'

function Login() {
    const navigate = useNavigate ();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //some fancy firebase login shittttt.....

            auth.signInWithEmailAndPassword(email,password)
                .then(auth=>{
                    navigate('/')
                })
                .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //some fancy firebase register shitttt.......
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                //it successfully created a new user with email and password 
                console.log(auth);
                if(auth){
                    navigate('/')//gmail- gameHorizon@gmail.com password-gameHorizon
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
    <Link to='/'>
    <img 
        className='login__logo'
        src='https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/la-braces-for-ice-raids-this-weekend/amazon-to-spend-big-money-on-voluntary-workforce-retraining/@@images/rectangular_image/page-header?v=1562973042.89'/>
    </Link>
    <div className='login__container'>
        <h1>Sign-in</h1>

        <form>

            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Password</h5>
            <input type='password' value = {password} onChange={e => setPassword(e.target.value)}/>

            <button className='login__signinButton' type ='submit' onClick={signIn}>Sign In</button>

        </form>

        <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of 
            Use & Sale. Please See our Privacy Notice, our Cookies Notice 
            and our Interest- based Ads Notice.
        </p>
        <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>

    </div>

    </div>
  )
}

export default Login