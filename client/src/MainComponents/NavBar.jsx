import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
<Link to={"/"}>Home</Link>
<Link to={"/games"}>Latests Releases</Link>
<Link to={"/Trending"}>Trending Games</Link>
<Link to={"/TalkToUs"}>Talk To Us!</Link>
        </div>
    )
}