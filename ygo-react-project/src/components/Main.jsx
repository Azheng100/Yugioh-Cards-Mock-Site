import { Route,Routes, } from 'react-router-dom'
import Home from './Home'
import CardsDisplay from './CardsDisplay'
import{ useState, useEffect } from 'react'
import axios from 'axios'
import CardDetails from './CardDetails'



export default function Main(){
    const [cards, setCards] = useState({})

    useEffect(()=>{

        const getData= async()=>{
            const response =await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            setCards(response.data.data)
            console.log(response.data.data)
        }
        getData()
    },[])
   
   
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/CardsDisplay' element={<CardsDisplay cards={cards}/>}/>
                <Route path='/CardsDisplay/:name' element={<CardDetails cards={cards}/>}/>
            </Routes>
        </div>
    )
}