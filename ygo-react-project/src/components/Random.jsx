import{ useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'


export default function Random(){
    const[isRandom,setIsRandom] = useState(null)

   
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
            </div>
       
          
        
      
            )
        }
        
}