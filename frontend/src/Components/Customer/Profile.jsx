import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Profile() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [profile,setProfile]=useState({
    'user_id':'', 
    'first_name':'',
    'last_name':'',
    'username':'',
     'email':'',
     'p_image':'',
   

  })
 // var customer_id=localStorage.getItem('customer_id')
var customer_id=11;
  useEffect(()=>{
     function fetchData(){
      axios
        .get(baseUrl + `customer/${customer_id}`)
        .then(function (response) {
          console.log(response.data)
          setProfile({
             'user_id':response.data.user.id,
             'first_name':response.data.user.first_name,
           'last_name':response.data.user.last_name,
           'username':response.data.user.username,
           'email':response.data.user.email,
           'p_image':response.data.profile_img,
          });
         
        })
        .catch(function (error) {
          console.log(error);
        });
         
          
      
      
       
        
      }
        fetchData();
    },[])

    const inputHandler=(e)=>{
      setProfile({
        ...profile,
        [e.target.name]:e.target.value
  
      });
    }
    const handleFileChange=(event)=>{
      setProfile({
        ...Profile,
        [event.target.name]:event.target.files[0]
      })
    }
    const submitHandler=(event)=>{
      event.preventDefault();
      const formData =new FormData();
      formData.append('user',profile.user_id)
      formData.append('profile_img',profile.p_image)
      
      
  
     
  
      axios.put(baseUrl+'customer/'+customer_id,formData,{
        headers:{
          'content-type':'multipart/form-data'
        }
      })
      .then(function(response){
        console.log(response)
        
          
          
      })
      .catch(function(error){
        
        console.log(error);
      })

      const formUserData =new FormData();
      formUserData.append('first_name',profile.first_name);
      formUserData.append('last_name',profile.last_name);
      formUserData.append('username',profile.username);
      formUserData.append('email',profile.email);

      axios.put(baseUrl+'user/'+profile.user_id,formUserData,{
        headers:{
          'content-type':'multipart/form-data'
        }
      })
      .then(function(response){
        console.log(response)
        
          
          
      })
      .catch(function(error){
        
        console.log(error);
      })


     
      
    }
  



  return (
    <div>
    <div class="flex min-h-full flex-col justify-center px-6  lg:px-8">
<div class="sm:mx-auto sm:w-full sm:max-w-sm">
  
  <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update Profile</h2>
</div>

<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  
  
  <form class="space-y-6" action="#" method='POST'>
  <div>
      <label for="text" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
      <div class="mt-2">
        <input id="firstname" name="first_name" type="text" onChange={inputHandler} value={profile.first_name} autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    <div>
      <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
      <div class="mt-2">
        <input id="lastname" name="last_name"  type="text" onChange={inputHandler} value={profile.last_name} autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
  <div>
    
      <label for="text" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
      <div class="mt-2">
        <input id="username" name="username" onChange={inputHandler} type="text" value={profile.username}  autocomplete="text" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
      <div class="mt-2">
        <input id="email" name="email" type="email" onChange={inputHandler} value={profile.email} autocomplete="email" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Profile img</label>
      <div class="mt-2">
        <img src={profile.p_image} alt="" width="20px" height="10px"  />
        <input id="profile_img" onChange={handleFileChange} name="profile_img" type="file"  autocomplete="" required class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
      </div>
    </div>
    

    

    <div>
      <button type="button" onClick={submitHandler} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
    </div>
  </form>

 
</div>
</div>
  </div>
  )
}

export default Profile
