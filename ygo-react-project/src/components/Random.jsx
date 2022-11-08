import{ useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import   CartContext  from '../CartContext'
import { useContext } from 'react'




export default function Random(){
    const[isRandom,setIsRandom] = useState(null)
    const{buy} = useContext(CartContext)
   
    const getRandom= async()=>{
       
        const response =await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
        
        setIsRandom(response.data)
        

        

      
    }

        useEffect(()=>{

            getRandom()
            
        },[])
        let navigate = useNavigate()
        const showCards=()=>{
        navigate(`${isRandom.name}`)
}

    
        if(!isRandom){
            return <h2>Loading....</h2>
        }else{
            return(
           <div>
               
            <button onClick={getRandom}>random</button>

            
            <h2 onClick={showCards}> {isRandom.name}</h2>
            <img onClick={showCards} src={isRandom.card_images[0].image_url} alt='cardimage'/>
            {isRandom.card_prices[0].tcgplayer_price=== '0.00' ? <h1>Item not available </h1>: <h1>Price: $ {isRandom.card_prices[0].tcgplayer_price}</h1>}
            <button className='buy' onClick={() => buy(isRandom.name, isRandom.card_prices[0].tcgplayer_price)}>Add to Cart</button>
            </div>
       
          
        
      
            )
        }
        
}