import React,{useState} from "react";
import './login.css'
export function SignUp(props){
    const [password ,setPassword]=useState("");
    const [username ,setUsername]=useState();

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleUsername=(e)=>{
        setUsername(e.target.value);
    }
    const submitForm=(e)=>{
            
            console.log(username)
            console.log(password)
    }

    return(
        <div className="login_box">
            <div className="login_form_heading">
                <h1 align="center">Sign Up</h1>
            </div>
            <div className="login_form" >
                
                    <div>
                        <label >Username </label>
                        <input type='text' name='Username' id='Username' value={username} onChange={handleUsername} />
                    </div>

                    <div>
                        <label >Password </label>
                        <input type='password' name='password' id='password' value={password} onChange={handlePassword}/>
                    </div>

                    
                    
                    <button type='submit' onClick={submitForm}>Sign Up</button>
                
            </div>
            
        </div>
       
    );
};