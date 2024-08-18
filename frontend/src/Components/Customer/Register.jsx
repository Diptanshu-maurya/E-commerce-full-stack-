import axios from 'axios';
import React from 'react'
import { useState } from 'react';


function Register() {
  const baseUrl='http://127.0.0.1:8000/api/'
  const [registerFormData,setRegisterFormData]=useState({
    "first_name":'',
    "last_name":'',
    "username":'',
    "email":'',
    "password":'',
    "password2":'',
    
  })
  const [formError,setFormError]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const [successMsg,setSuccessMsg]=useState('');

  const inputHandler=(e)=>{
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]:e.target.value

    });
  }

    const submitHandler=(event)=>{
      event.preventDefault();
      const formData =new FormData();
      formData.append('first_name',registerFormData.first_name);
      formData.append('last_name',registerFormData.last_name);
      formData.append('username',registerFormData.username);
      formData.append('email',registerFormData.email);
      formData.append('password',registerFormData.password);
      formData.append('password2',registerFormData.password2);
      
  
     
  
      axios.post(baseUrl+'customer/register',formData)
      .then(function(response){
        console.log(response)
        if(response.data.response==false){
          
          setErrorMsg(response.data.error.username[0])
          setSuccessMsg('');
        }
        else{
          setRegisterFormData({
            "first_name":'',
            "last_name":'',
            "username":'',
            "email":'',
            "password":'',
            "password2":'',
            
          })
          
          setErrorMsg('')
          setSuccessMsg(response.data.msg)
          localStorage.setItem('customer_id',response.data.user_id);
          localStorage.setItem('customer_token',response.data.token);
          localStorage.setItem('customer_username',response.data.username);
          localStorage.setItem('customer_login',true);
        }
      })
      .catch(function(error){
        setErrorMsg(error.response.data.error)
        console.log(error);
      })
     
      
    }
    const buttonEnable=(registerFormData.first_name!=''&& registerFormData.last_name!=''&&registerFormData.username!=''&& registerFormData.email!=''&&registerFormData.password!=''&&registerFormData.mobile!='')

 






  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6  lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <p className='text-red-600'>All fields are required</p>
    {successMsg && <p>{successMsg}</p>}
    {errorMsg && <p className='text-red-700'>{errorMsg}</p>}
    <form class="space-y-6" action="#" method="POST">
    <div>
        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div class="mt-2">
          <input id="firstname" name="first_name" type="text" onChange={inputHandler} value={registerFormData.first_name} autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div class="mt-2">
          <input id="lastname" name="last_name"  type="text" onChange={inputHandler} value={registerFormData.last_name} autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
    <div>
        <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div class="mt-2">
          <input id="username" name="username" type="text" onChange={inputHandler} value={registerFormData.username} autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" onChange={inputHandler} value={registerFormData.email} autocomplete="email" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      

      <div> 
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="mt-2">
          <input id="password" name="password" type="password" onChange={inputHandler} autocomplete="current-password" value={registerFormData.password} required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div> 
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
        <div class="mt-2">
          <input id="password2" name="password2" type="password" onChange={inputHandler} autocomplete="current-password" value={registerFormData.password2} required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="button" onClick={submitHandler} disabled={!buttonEnable} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

   
  </div>
</div>
    </div>
  )
  
}

export default Register
