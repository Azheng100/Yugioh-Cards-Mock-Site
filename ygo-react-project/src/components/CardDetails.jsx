import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import   CartContext  from '../CartContext'
import { useContext } from 'react'

const CardDetails = ({cardName, price}) => {
  const{buy} = useContext(CartContext)
    
  
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
  
      
    return (cards) ? (
    <div className="carddetail">{

        
            <div key={cards.name}>
             {!cards.card_sets ? null: <h2 className='setname'>{cards.card_sets[0].set_name}</h2>}
             <h2 className='cardname'>{cards.name}</h2>
        
            <img src={cards.card_images[0].image_url}/>
            {!cards.banlist_info ? null:<h4 className='forbidden'>{cards.banlist_info.ban_tcg}</h4>}
            {!cards.archetype ? null: <h4> Archeytpe: {cards.archetype}</h4>}
            {!cards.def ? null: <h4>{cards.atk} Atk / {cards.def} Def</h4>}
            {cards.type == 'Link Monster' ? <h4>{cards.atk} Atk</h4>:null}
             <h4>Type: {cards.attribute} {cards.race} {cards.type} </h4>
             <h4 className='cardeff'>{cards.desc}</h4>
             {cards.card_prices[0].tcgplayer_price=== '0.00' ? <h1>Item not available </h1>: <h1>Price: $ {cards.card_prices[0].tcgplayer_price}</h1>}
            

             </div>

        
    }
  <div>
    <button className='buy' onClick={() => buy(cards.name, cards.card_prices[0].tcgplayer_price)}>Add to Cart</button>
    
  </div>
                
  <div className='returnbutton'>
  <button className='tohome'><Link to='/'> Home </Link> </button>
  <button className='tosearch'><Link to='/search'> Search </Link> </button>
  </div>
</div>
) : <div>loading</div>;

}



export default CardDetails