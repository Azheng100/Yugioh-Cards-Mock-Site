
import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axios from 'axios'

export default function CardsDisplay(){
    const [cards, setCards] = useState(null)

    useEffect(()=>{

        const getData= async()=>{
            const response =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            setCards(response.data.data)
            
        }
        getData()
    },[])
   

    //need to create a state for our data 
    //we need to call an axios function
    //we need to set state of our data
    //we need to see the data
    //let us make a guard operator to make sure time will not destroy the site
let navigate = useNavigate()
const showCards=(cards)=>{
    navigate(`${cards.name}`)
}


if(!cards){
    return <h2>Loading....</h2>
}else{
    return(
        <div>
        {
            cards.map((card)=>(
            <div key={card.name} className='cardlist' onClick={()=>showCards(card)}>

            <h2>{card.name} </h2>
            </div>
            ))
        }
        </div>
    )
}

}