import { useState } from 'react'




export default function Home(){
   
        const [isHidden, setIsHidden] = useState(true)
    
    return(
        <div>
            <h2>Attention Duelists! Please browse our collection for all your dueling needs.</h2>

                
                <button onClick={()=>setIsHidden(!isHidden)}> Nyehhhhh </button>

                <div>
                <img className={isHidden?"hide":"nothidden"} src='https://media.tenor.com/1Jjf__-nCxMAAAAC/yugioh-yugioh-duel-monsters.gif'/>
            </div>

            
        </div>
    )
}

