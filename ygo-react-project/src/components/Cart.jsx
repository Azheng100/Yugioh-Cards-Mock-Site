import CartContext from '../CartContext'
import { useContext } from 'react'
import { useState } from 'react'

const Cart=()=>{
    const {items} =useContext(CartContext)
    const [isHidden, setIsHidden] = useState(true)
    const{clear} = useContext(CartContext)
    function cart1(){
        setIsHidden(!isHidden)
    }
    function cart2(){
        alert('Thanks for testing')
    }
    function cart3(){
        cart1()
        cart2()
    }
    let x = 0
    
    function sum(){
        for (let i=0; i<items.length; i++){
            x += parseFloat(items[i].price)
        }
        return x
    }
    sum()
    return(
        
        <div>
            
            <h1>Your Total Items: {items.length} </h1>
        <div >{
           items.map((item)=>(
            
            <div className='gridcart' key={item.cardName}>
                <h2 className='cart'>Card: {item.cardName}</h2>
                <h1 className='cart'>Price: $ {item.price}</h1>

            </div>
            
           )

        )}
        <div>
            <h1>Total: $ {x.toFixed(2)}</h1>
            <button onClick={()=>cart3()}> Check out </button>
           </div>
           <div>
                <img className={isHidden?"hide":"nothidden"} src='https://media.tenor.com/AVD09CClJFkAAAAC/yugioh-abridged-ygotas.gif' alt="kaiba"/>
            </div>

            <button onClick={clear} >clear</button>
        </div>
        
        </div>
        
    )
}

export default Cart


