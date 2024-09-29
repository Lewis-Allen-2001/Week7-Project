import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import  "./GameList.css"

export default function GameList(){
    const[games, setGames] = useState([])

    useEffect(() =>{
        async function fetchGames(){
            const res = await fetch('http://localhost:5432/games')
            const games = await res.json()

            setGames(games);
        }
fetchGames();
    }, [])

    return (
    <div className="GameListContainer">
        <h2> Game List</h2>

        {games.map(game => (
            <div key ={game.id} className="GameItem">
                <Link to={`/games/${game.id}`}>
                <img src ={game.img_url} alt = {game.title} />
                <h3>{game.title}</h3>
                </Link>
            </div>
            ))}
    </div>
    )
}