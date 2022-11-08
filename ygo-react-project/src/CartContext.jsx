
import React from "react"
import { createContext, useState } from "react"
// watched developedbyed's React Context API Tutorial | Quick and Easy video for shopping cart inspiration for using useContext


const CartContext= createContext()



export  function CartProvider({children}){
    const [items, setItems] = useState([])
    const buy = (cardName,price)=>{
        setItems((prevState)=> [...prevState, {cardName, price}])
        
      }
      function clear(){
        setItems([])
      }
    return(
    <CartContext.Provider value={{items , buy , clear}}>{children}</CartContext.Provider>
    )
}
export default CartContext
