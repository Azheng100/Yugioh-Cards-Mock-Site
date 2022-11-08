import { Link } from "react-router-dom";
import CartContext from "../CartContext";
import { useContext } from "react";
const Nav=()=>{

   const { items } = useContext(CartContext)
    return(
        <div className="nav">
        <button className="navbutton"><Link to = '/'> Home</Link></button>
        <button className="navbutton"><Link to = 'CardsDisplay'>Master Card List</Link></button>
        <button className="navbutton"><Link to = 'Search'>Card Search</Link></button>
        <button className="navbutton"><Link to = 'Cart'>Cart (<span>{items.length}</span>)</Link></button>
        <button className="navbutton"><Link to = 'LOB'>LOB Pack Simulator</Link></button>

        </div>
    )
}

export default Nav