import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContext } from './Components/Context.jsx'

const checkcustomer=localStorage.getItem('customer_login');
const customerid=localStorage.getItem('customer_id');




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{'login':checkcustomer,'id':customerid}}>
    <App />
    </UserContext.Provider>
    
  </React.StrictMode>,
)
