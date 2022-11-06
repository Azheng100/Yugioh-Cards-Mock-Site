
import React from "react"
import { createContext, useState } from "react"
// export const CartContext= React.createContext()


const CartContext= createContext()



export  function CartProvider({children}){
    const [items, setItems] = useState([])
    const buy = (cardName,price)=>{
        setItems((prevState)=> [...prevState, {cardName, price}])
        console.log(items)
      }
    return(
    <CartContext.Provider value={{items , buy}}>{children}</CartContext.Provider>
    )
}
export default CartContext
