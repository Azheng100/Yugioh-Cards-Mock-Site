import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CardDetails = () => {
    
  
    let { name } = useParams()
  
    const [cards, setCards] = useState('')
   
    const getCards= async ()=>{
        const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        setCards(response.data.data)
      
      
      let selectedCards =response.data.data.find(cards=>cards.name===name)
     console.log(selectedCards)
      setCards(selectedCards)
      
      
      }

    useEffect(()=>{
        getCards()
        
      },[])
  
      
    return cards ? (
    <div className="carddetail">{

        
            <div key={cards.name}>
             <h2>{cards.name}</h2>
            <img src={cards.card_images[0].image_url}/>
             <h4>Type: {cards.type} & {cards.race} </h4>
             <h4>Effect: {cards.desc}</h4>
             {/* <h2>{cards.card_sets[0].set_name}</h2> */}
             <h2>Price: {cards.card_prices[0].tcgplayer_price} dollars</h2>
            

             </div>

        
    }
  <div className='buy'>
    <button>Add to Cart</button>
    
  </div>
                
  <div className='returnbutton'>
  <button ><Link to='/'> Home </Link> </button>
  <button ><Link to='/CardsDisplay'> Back </Link> </button>
  </div>
</div>
) : <div>loading</div>;

}



export default CardDetails