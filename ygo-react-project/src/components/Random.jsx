import{ useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Random(){
    const[isRandom,setIsRandom] = useState(null)

        useEffect(()=>{

            const getRandom= async()=>{
                const response =await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php')
                setIsRandom(response.data)
              
            }
            getRandom()
            
        },[])
   
    
        if(!isRandom){
            return <h2>Loading....</h2>
        }else{
            return(
           <div>
            
            <h2>{isRandom.name}</h2>
            <img src={isRandom.card_images[0].image_url}/>
           </div>
            )
        }
        
}