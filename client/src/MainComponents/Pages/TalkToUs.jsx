import GameForm from "./PageComponents/GameForm"
import "./TalkToUs.css"


export default function TalkToUs(){
    return(
        <div className="TalkToUs">
            <h1>Tell Us Your Favourite Game!</h1>
            <h2>It will Display on the Game List Page!</h2>
            <GameForm/>
        </div>
    )
}