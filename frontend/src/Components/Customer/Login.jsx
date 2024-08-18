import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function Login() {
  const baseUrl='http://127.0.0.1:8000/api/'

  const [loginFormData,setLoginFormData]=useState({
    "username":'',
    "password":''
  })
  const [formError,setFormError]=useState(false);
  const [Msg,setMsg]=useState('');


  const inputHandler=(e)=>{
    setLoginFormData({
      ...loginFormData,
      [e.target.name]:e.target.value

    });

  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const formData =new FormData();
    formData.append('username',loginFormData.username);
    formData.append('password',loginFormData.password);

   

    axios.post(baseUrl+'customer/login',formData)
    .then(function(response){
      console.log(response.data.username)
      setMsg(`You logged in as ${loginFormData.username}`)


      
      localStorage.setItem('customer_id',response.data.user_id);
      localStorage.setItem('customer_token',response.data.token);
      localStorage.setItem('customer_username',response.data.username);
      localStorage.setItem('customer_login',true);

      setLoginFormData({
          
             "username":'',
           
             "password":''
            
           })
        
      // if(response.data.bool==false){
      //   setFormError(true)
      //   setErrorMsg(response.data.msg)
      // }
      // else{
      //   setLoginFormData({
          
      //     "username":'',
         
      //     "password":''
          
      //   })
      
        
        
      //   setFormError(true)
      //   setErrorMsg(response.data.msg)
      // }
    })
    .catch(function(error){
      console.log(error);
      setMsg('username or password is incorrect')
    })
   
    
  }
  //const checkcustomer=localStorage.getItem('customer_login');
  // if(checkcustomer){
  //  window.location.href='/Customer/dashboard'
  // }

 
  
















  const buttonEnable=(loginFormData.username!=''&& loginFormData.password!='')
  
  return (
    <div>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST" onSubmit={submitHandler}>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div class="mt-2">
          <input id="email" name="username" onChange={inputHandler} value={loginFormData.username} type="text" autocomplete="email" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password"  class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" value={loginFormData.password} onChange={inputHandler} autocomplete="current-password" required class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="button" onClick={submitHandler} disabled={!buttonEnable} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login </button>
        
      </div>
      {Msg && <p className='text-red-700 text-lg font-md'> {Msg}</p>}
      
    </form>

    
  </div>
</div>
    </div>
  )
}

export default Login
