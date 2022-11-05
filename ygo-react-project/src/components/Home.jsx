import { useState } from 'react'
import Random from './Random'



export default function Home(){
   
        const [isHidden, setIsHidden] = useState(true)
       

    return(
        <div>
            <h2>Attention Duelists! Please browse our collection for all your dueling needs.</h2>

                {/* Pedtrotech video on "Manipulating the DOM In ReactJS | useRef" for button inspiration */}
                <button onClick={()=>setIsHidden(!isHidden)}> Nyehhhhh </button>

                <div>
                <img className={isHidden?"hide":"nothidden"} src='https://media.tenor.com/1Jjf__-nCxMAAAAC/yugioh-yugioh-duel-monsters.gif'/>
            </div>

            <h2>Random Card</h2>
            <Random/>
           {/* i really want to make a random button */}




        </div>
    )
}

