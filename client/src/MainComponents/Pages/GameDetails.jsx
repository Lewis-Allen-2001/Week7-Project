import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormatDate from "../Utils/FormatDate"
import "./GameDetails.css"



export default function GameDetailsPage() {
  const [gameDetails, setGameDetails] = useState({});
  const { id } = useParams();

 
 

  useEffect(() => {
    async function fetchGameDetails() {
      const res = await fetch(`http://localhost:5432/games?include_genres=true&id=${id}`);
      const details = await res.json();
      setGameDetails(details);
    }

    fetchGameDetails();
  }, [id]);
  return (
    <div key = {gameDetails.id} className="GameDetails">
      <h2>{gameDetails.title}</h2>
      <img src={gameDetails.img_url} alt={gameDetails.title} />
      <h3>Studio: {gameDetails.studio}</h3>
      <h3>Platforms: {gameDetails.platforms}</h3>
      <h3>Released: {gameDetails.released && <FormatDate date={gameDetails.released} />}</h3>

      {gameDetails.genres && gameDetails.genres.length > 0 && (
        <div>
          <h3>Genres:</h3>
          <ul>
            {gameDetails.genres.map((genre) => (
              <li key = {gameDetails}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

