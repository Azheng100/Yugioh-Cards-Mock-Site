import { Link } from "react-router-dom";

const Nav=()=>{
    return(
        <div className="nav">
        <Link to = '/'> Home</Link>
        <Link to = 'CardsDisplay'>Master Card List</Link>
        <Link to = 'Search'>Search for a card</Link>

        </div>
    )
}

export default Nav