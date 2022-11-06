import { Route,Routes, } from 'react-router-dom'
import Home from './Home'
import CardsDisplay from './CardsDisplay'
import Searcher from './Search'
import CardDetails from './CardDetails'
import Cart from './Cart'
import BoosterPack from './BoosterPack'


export default function Main(){
    
    return(
        
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/CardsDisplay' element={<CardsDisplay/>}/>
                <Route path='/search' element={<Searcher/>}/>
                <Route path='/CardsDisplay/:name' element={<CardDetails/>}/>
                <Route path='/Cart' element={<Cart/>}/>
                <Route path='/search/:name' element={<CardDetails/>}/>
                <Route path='/LOB' element={<BoosterPack/>}/>
                <Route path='LOB/:name' element={<CardDetails/>}/>
            </Routes>
        </div>
     
    )
}