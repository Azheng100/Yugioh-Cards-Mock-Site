import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav">
        <button className="navbutton"><Link to = '/'> Home</Link></button>
        <button className="navbutton"><Link to = 'CardsDisplay'>Master Card List</Link></button>
        <button className="navbutton"><Link to = 'Search'>Search for a card</Link></button>
        <button className="navbutton"><Link to = 'Cart'>Cart</Link></button>
      

        </div>
    )
}

export default Nav