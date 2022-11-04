import { Link } from 'react-router-dom'
export default function Home(props){
    return(
        <div>
            <h2>Welcome! Please browse our collection or use our draft application</h2>


                <button><Link to='/CardsDisplay/Abaki'> Random Card </Link></button>



            
        </div>
    )
}

