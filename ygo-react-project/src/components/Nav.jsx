import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav">
        <button><Link to = '/'> Home</Link></button>
        <button><Link to = 'CardsDisplay'>Master Card List</Link></button>
        <button><Link to = 'Search'>Search for a card</Link></button>
        <button><Link to = 'Cart'>Cart</Link></button>
        <button><Link to= 'LOB'>Pack Opening</Link></button>

        </div>
    )
}

export default Nav