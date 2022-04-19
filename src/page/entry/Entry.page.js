import React, { useState } from 'react';
import { LoginForm } from '../../components/Login.comp'


import './entry.style.css';
export const Entry = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

const  handleOnchange = e =>{

}

//34.42


  return (
    <div className='entry-page bg-info'>
        <div class=" bg-light p-5 mb-2">
            <div className = "form-box">
            </div>
   <LoginForm/>
   </div>
   
   
    </div>
  )
};