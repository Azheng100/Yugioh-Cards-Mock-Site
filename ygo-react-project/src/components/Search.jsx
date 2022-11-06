import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axios from 'axios'

// the map filter function was inspired by Pedrotech video on "Search bar in react tutorial-cool search filter tutorial." I took the master list and added in the filter to create a search bar. 

const Searcher=()=>{
    //submit button does not work as intended 
    
    const [cards, setCards] = useState(null)
    const [data, setData]= useState([])
   
    const handleChange =(e)=>{
        const searchWord = e.target.value.toLowerCase()
        const newFilter = cards.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord)
        })
        if(searchWord===''){
            setData([])
        }else{ 
        setData(newFilter)
        }
       
   
    }
    useEffect(()=>{

        const getData= async()=>{
            const response =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            setCards(response.data.data)
            
        }
        getData()
    },[])
   
let navigate = useNavigate()
const showCards=(cards)=>{
    navigate(`${cards.name}`)
}


if(!cards){
    return <h2>Loading....</h2>
}else{
 
    return(
        <div>
    
    <div> 
     <form>
         <input type='text' placeholder="card name" onChange={handleChange}></input>
         
         <button>clear</button>
        </form>
         </div>
        {data.length !==0 && (
            <div className='searching'>
        {
            data.map((card)=>(
            <div key={card.name} className='cardlist' onClick={()=>showCards(card)}>

            <h2>{card.name} </h2>
            </div>
            ))
            }
        </div>
        )}
        </div>
    )
}

}

export default Searcher