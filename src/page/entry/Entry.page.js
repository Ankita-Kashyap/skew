import React, { useState } from 'react';
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';

import './entry.style.css';
export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login');

const  handleOnChange = e =>{         //when invoke event accessing target (name(email) and value(user value) )
    const{name,value} = e.target  //destructure...
   switch(name){
     case 'email':
       setEmail(value);
        break;
    case "password":
      setPassword(value);
        break;
        default:
          break;

   }

  };
  const handleOnSubmit = e => {
    e.preventDefault()
if( !email || !password)
{
  return alert("Fill up all the form")
}
//todo call api and submit the form
console.log(email,password)
  };
const formSwitcher = (frmType) =>{
  setFrmLoad(frmType);
}


  return (
    <div className='entry-page bg-info'>
        <div class=" bg-light p-5 mb-2">
            <div className = "form-box">
            </div>
      {frmLoad === "login" && (
   <LoginForm
    handleOnChange = {handleOnChange} 
    handleOnSubmit = {handleOnSubmit}
    formSwitcher = {formSwitcher}
    email = {email}      
    pass = {password}
    />)}
   {frmLoad === "rest"&& (<ResetPassword
     handleOnChange = {handleOnChange} 
    handleOnSubmit = {handleOnSubmit}
    formSwitcher = {formSwitcher}
    email = {email}      
    
    />)}
   </div>
  
    </div>
     
  )
};