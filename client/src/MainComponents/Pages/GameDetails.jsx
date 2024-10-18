import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormatDate from "../Utils/FormatDate"
import "./GameDetails.css"



export default function GameDetailsPage() {
  const [gameDetails, setGameDetails] = useState({});
  const [error, setError] = useState(null); 
  const { id } = useParams();

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const res = await fetch(`https://week7-project-client-r6wk.onrender.com/games?include_genres=true&id=${id}`);

        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const details = await res.json();
        setGameDetails(details);
      } catch (err) {
        setError(err.message); 
      }
    }

    fetchGameDetails();
  }, [id]);


  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div key={gameDetails.id} className="GameDetails">
      <h2>{gameDetails.title}</h2>
      {gameDetails.img_url && (
        <img src={gameDetails.img_url} alt={gameDetails.title} />
      )}
      <h3>Studio: {gameDetails.studio}</h3>
      <h3>Platforms: {gameDetails.platforms}</h3>
      <h3>
        Released: {gameDetails.released && <FormatDate date={gameDetails.released} />}
      </h3>

      {gameDetails.genres && gameDetails.genres.length > 0 && (
        <div>
          <h3>Genres:</h3>
          <ul>
            {gameDetails.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

