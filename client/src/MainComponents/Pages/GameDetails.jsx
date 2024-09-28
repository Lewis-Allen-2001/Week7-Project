import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



export default function GameDetailsPage() {
  const [gameDetails, setGameDetails] = useState({});
  const { id } = useParams();

  // had to get AI help as i had no knowledge of how to reverse the date
  let releasedDate = new Date(gameDetails.released);
  let day = releasedDate.getDate().toString().padStart(2, '0'); 
let month = (releasedDate.getMonth() + 1).toString().padStart(2, '0'); 
let year = releasedDate.getFullYear();
let formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);

  useEffect(() => {
    async function fetchGameDetails() {
      const res = await fetch(`http://localhost:5432/games?include_genres=true&id=${id}`);
      const details = await res.json();
      setGameDetails(details);
    }

    fetchGameDetails();
  }, [id]);
  return (
    <div key = {gameDetails.id}>
      <h2>{gameDetails.title}</h2>
      <img src={gameDetails.img_url} alt={gameDetails.title} />
      <h3>Studio: {gameDetails.studio}</h3>
      <h3>Platforms: {gameDetails.platforms}</h3>
      <h3>Released: {gameDetails.released && formattedDate}</h3>

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

