import CartContext from '../CartContext'
import { useContext } from 'react'


const Cart=()=>{
    const {items} =useContext(CartContext)
    console.log(items)

    return(
        <div>
            
            <h1>Your items</h1>
        <div>{
           items.map((item)=>{
            
            <div key={item.cardName}>
                <h2>Card: {item.cardName}</h2>
                <h2>Price: {item.price}</h2>

            </div>
           }
        )}
        
        </div>
        
        </div>
        
    )
}

export default Cart


