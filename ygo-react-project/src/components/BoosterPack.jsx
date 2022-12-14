import{ useState, useEffect } from 'react'
import axios from 'axios'



export default function BoosterPack(){
    const[isBooster,setIsBooster] = useState(null)
    let a =Math.floor(Math.random() * 125)
    let b =Math.floor(Math.random() * 125)
    let c =Math.floor(Math.random() * 125)
    let d =Math.floor(Math.random() * 125)
    let e =Math.floor(Math.random() * 125)
    let f =Math.floor(Math.random() * 125)
    let g =Math.floor(Math.random() * 125)
    let h =Math.floor(Math.random() * 125)
    let i =Math.floor(Math.random() * 125)

    const [isHidden, setIsHidden] = useState(true)

    function callTwo(){
        setIsHidden(!isHidden)
        openPack()
    }


    const openPack= async()=>{
        const response =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=legend%20of%20blue%20eyes%20white%20dragon')
        setIsBooster(response.data.data)
       
    }
        useEffect(()=>{

            openPack()
            
        },[])
        
        if(!isBooster){
            return <h2>Loading....</h2>
        }else{
            return(
            <div>
               <div>
               <h2>Legend of the Blue Eyes White Dragon Pack</h2>
                <img className={isHidden?"nothidden":"hide"} src='https://product-images.tcgplayer.com/fit-in/782x782/181266.jpg' width={220} height={400}/>
            </div>
                
           <div className={isHidden?"hide":"nothidden"} >

            <div className='lob' >
            
            <img src={isBooster[a].card_images[0].image_url}/>
            <img src={isBooster[b].card_images[0].image_url}/>
            <img src={isBooster[c].card_images[0].image_url}/>
            <img src={isBooster[d].card_images[0].image_url}/>
            <img src={isBooster[e].card_images[0].image_url}/>
            <img src={isBooster[f].card_images[0].image_url}/>
            <img src={isBooster[g].card_images[0].image_url}/>
            <img src={isBooster[h].card_images[0].image_url}/>
            <img src={isBooster[i].card_images[0].image_url}/>

            </div>

            
           </div>
           <div>
           <button className='lobbutton' onClick={callTwo}>Open a pack</button>
           </div>
           </div>
            )
        }
        
}