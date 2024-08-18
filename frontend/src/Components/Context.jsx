import React from 'react'
import { createContext } from 'react'
export const UserContext=createContext({
  'login':false,
  'id':null
});
export const CartContext=createContext()

function Context() {
  return (
    <div>
      
    </div>
  )
}

export default Context
