import SignInForm from "./PageComponents/SignInForm";
import "./Home.css"

export default function Home(){
    return(
        <div className="home-container">
            <SignInForm/>
            <div className="NewsGrid">
<a href= "https://www.pcgamer.com/games/survival-crafting/mojang-reveals-the-first-addition-of-minecraft-s-year-round-update-schedule-a-creepy-new-forest-biome-haunted-by-a-tough-to-kill-monster/"><img className="NewsImage" src="https://cdn.mos.cms.futurecdn.net/obY3SMe326S66qZXSz7H9Z-1200-80.jpg.webp"  alt="new minecraft mob"/></a>
<h2>Mojang Reveals new mob in new yearly update schedule!</h2>
<h3>Click to find out more!</h3>

<div className="NewsGrid">
    <a href="https://www.pcgamer.com/games/survival-crafting/videogame-ip-lawyer-says-nintendo-couldve-been-planning-its-pocketpair-lawsuit-before-palworld-even-released-if-you-know-who-youre-going-to-go-sue-you-can-draft-claims-to-target-them/"><img className="NewsImage" src="https://cdn.mos.cms.futurecdn.net/Wm5J7zVNWYiJyyAL7pv7wi-650-80.jpg.webp" alt="Palworld"/></a>
    <h2>Nintendo sues Palworld creators</h2>
    <h3>Click to find out more!</h3>
</div>
<div className="NewsGrid">
    <a href="https://www.pcgamer.com/games/third-person-shooter/helldivers-2-players-have-been-tasked-with-building-the-democracy-space-station-a-gigastructure-of-indeterminate-firepower-that-will-be-aimed-by-literal-democracy/"><img className="NewsImage" src="https://cdn.mos.cms.futurecdn.net/TPZE3Si8HYHVZPmmg88Y8A-650-80.jpg.webp" alt="Helldiver 2"/></a>
    <h2>Helldiver 2 Democracy Spacestation?!?!</h2>
    <h3>Click to find out more!</h3>
</div>
            </div>
        </div>
    )
}