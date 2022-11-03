
import { useNavigate } from 'react-router-dom'

export default function CardsDisplay(props){
    //need to create a state for our data 
    //we need to call an axios function
    //we need to set state of our data
    //we need to see the data
    //let us make a guard operator to make sure time will not destroy the site
let navigate = useNavigate()
const showCards=(cards)=>{
    navigate(`${cards.name}`)
}


if(!props.cards){
    return <h2>Loading....</h2>
}else{
    return(
        // <h2>hello</h2>
        <div>
        {
            props.cards.map((cards)=>(
            <div key={cards.name} className='cardlist' onClick={()=>showCards(cards)}>

            <h2>{cards.name} </h2>
            </div>
            ))
        }
        </div>
    )
}

}