import React, { useState } from "react";
import {  useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../Hooks/useAuth";
import './Login.css'


const Login = () => {
  
const {signInWithGoogle,setUser,setIsLoading,loginWithEmailAndPassword}= useAuth()    
const history= useHistory()
const location = useLocation()

const url= location.state?.from || "/home"

const [email , setEmail]= useState("")
const [password , setPassword] = useState("")


const handleGetEmail = (e) =>{
  setEmail(e.target.value);
}

const handleGetPassword = (e)=> {
    setPassword(e.target.value);
}




const handleLoginWithEmailAndPassword=(e)=>{
    e.preventDefault();

    loginWithEmailAndPassword(email,password)
    .then((res) => {
      setIsLoading(true)
        setUser(res.user);
        history.push(url)
        // ...
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage);
    })
      .finally(() => {
        setIsLoading(false)
      })
}





  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => 
        {
          setIsLoading(true)
          setUser(res.user)
          history.push(url)
        }
          )
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false)
      })
  };

  return (
    <div class="container text-center">
    <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin" onSubmit={handleLoginWithEmailAndPassword}>
                        <div class="form-label-group"> <input type="email" id="inputEmail" class="form-control" onBlur={handleGetEmail} placeholder="Email address" required autofocus/> <label for="inputEmail">Email address</label> </div>
                        <div class="form-label-group"> <input type="password" id="inputPassword" class="form-control" onBlur={handleGetPassword} placeholder="Password" required/> <label for="inputPassword">Password</label> </div>
                        <div class="custom-control custom-checkbox mb-3"> <input type="checkbox" class="custom-control-input" id="customCheck1"/> <label class="custom-control-label" for="customCheck1">Remember password?</label> </div> <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                        <button class="btn btn-lg btn-google btn-block text-uppercase" onClick={handleGoogleLogin} type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Login;