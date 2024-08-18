import React from 'react'

function Logout() {
  const logouthandler=()=>{
     localStorage.removeItem('customer_login');
     localStorage.removeItem('customer_username');
     localStorage.removeItem('customer_token');
    // window.location.href='/Customer/login';

  }
  
  return (
    <div>
        <div className="text-white flex items-center h-8 w-20 bg-blue-700 rounded-lg p-1 justify-center cursor-pointer hover:opacity-90 ml-80 mt-20" onClick={logouthandler}>
                 Logout 
                
              </div>
    </div>
  )
}

export default Logout
