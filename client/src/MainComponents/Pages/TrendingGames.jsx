import "./TrendingGames.css"


export default function TrendingGames(){
    return(
        <div>
        <h1>Top 5 Trending Games</h1>

            <div className="game">
            <h1>1</h1>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg" alt="League of Legends"/>
            <h3>League of Legends</h3>
            </div>

            <div className="game">
            <h1>2</h1>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/18122-188x250.jpg" alt="World of warcraft"/>
            <h3>World Of Warcraft</h3>
            </div>

            <div className="game">
            <h1>3</h1>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg" alt="Grand Teft Auto V"/>
            <h3>Grand Theft Auto V</h3>
            </div>

            <div className="game">
            <h1>4</h1>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/497497_IGDB-188x250.jpg" alt="Brawl Stars"/>
            <h3>Brawl Stars</h3>
            </div>

            <div className="game">
            <h1>5</h1>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/2011938005_IGDB-188x250.jpg" alt="EA SPORTS FC 25"/>
            <h3>EA SPORTS FC 25</h3>
            </div>

        <p>All games shown are trending according to <a href="https://www.twitch.tv/directory/gaming">Twitch.tv</a></p>
        </div>
    )
}