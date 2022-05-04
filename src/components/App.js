import React, { useState } from 'react';
import './App.scss';

function App(){
    const [fnameError, setFnameError] = useState(false);
    const [lnameError, setLnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [pwdError, setPwdError] = useState(false);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(fname === ""){
            setFnameError(true);            
        }else{
            setFnameError(false);
            setFname("");
        }

        if(lname === ""){
            setLnameError(true);            
        }else{
            setLnameError(false);
            setLname("");
        }

        if(password === ""){
            setPwdError(true);            
        }else{
            setPwdError(false);
            setPassword("")
        }

        if(email.includes('@') && email.includes('.com')){
            setEmailError(false);
            setEmail("");
        }else{
            setEmailError(true);
            setEmail("");
        }
    }

    return(
        <div className='App'>
            <div className='App-titleContent'>
                <h2 className='App-titleContent__title'>Learn to code by watching others</h2>
                <p className='App-titleContent__sub'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>
            <div className='App-userInput'>
                <div className='App-userInput__offer-box'>
                    <p className='App-userInput__offer-box__text'>
                        Try it free 7 days
                        <span> then $20/mo. thereafter</span>
                    </p>
                </div>
                <form className='App-userInput__form' onSubmit={handleSubmit}>
                    <div>
                        <input type="text" placeholder='First Name' onChange={(evt) => setFname(evt.target.value)} value={fname} className={fnameError ? 'error' : ''} />
                        <p className={fnameError ? 'errorMsg' : 'hide'}>First name cannot be empty</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Last Name' onChange={(evt) => setLname(evt.target.value)} value={lname} className={lnameError ? 'error' : ''} />
                        <p className={lnameError ? 'errorMsg' : 'hide'}>Last name cannot be empty</p> 
                    </div>
                    <div>
                        <input type="text" placeholder={emailError ? 'email@example/com' : 'Email Address'} onChange={(evt) => setEmail(evt.target.value)} value={email} className={emailError ? 'error emailError' : ''} />
                        <p className={emailError ? 'errorMsg' : 'hide'}>Looks like this is not an email</p>  
                    </div>
                    <div>
                        <input type="password" placeholder='Password' onChange={(evt) => setPassword(evt.target.value)} value={password} className={pwdError ? 'error' : ''} />
                        <p className={pwdError ? 'errorMsg' : 'hide'}>Password cannot be empty</p>
                    </div>
                    <button type='submit'>CLAIM YOUR FREE TRIAL</button>
                    <p className='App-userInput__form-terms'>
                        By clicking the button, you are agreeing to our
                        <span> Terms and Services</span> 
                    </p>
                </form>
            </div>
        </div>
    );
}

export default App;