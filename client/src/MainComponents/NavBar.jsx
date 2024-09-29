import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="NavBar">
<Link to={"/"}>Home</Link>

<Link to={"/games"}>Game List</Link>

<Link to={"/Trending"}>Trending Games</Link>

<Link to={"/TalkToUs"}>Talk To Us!</Link>
        </div>
    )
}