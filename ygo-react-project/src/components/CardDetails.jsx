import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const CardDetails = (props) => {
    
  
    let { name } = useParams()
  
    const [cards, setCards] = useState('')
   
    const getCards= async ()=>{
        const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
        setCards(response.data.data)
      
      
      let selectedCards =response.data.data.find(cards=>cards.name===name)
     
      setCards(selectedCards)
      
      
      }

    useEffect(()=>{
        getCards()
      },[])
  

    return cards ? (
      
      <div className="carddetail">
  
        <div className="carddetail-header">
                     <h2>{cards.name}</h2>
                     
                     <h4>Type: {cards.type} & {cards.race} </h4>
                     <h4>Effect {cards.desc}</h4>
                     
  
  </div> <div className='returnbutton'>
  <button ><Link to='/'> Home </Link> </button>
  </div>
</div>
) : null;

}

export default CardDetails