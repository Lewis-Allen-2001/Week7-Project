import { useState } from "react";

export default function NewGameForm({getNewGame}){

const [gameFormData, setGameFormData] = useState({title: "", studio: "", platforms: "", released: ""})

function handleChange(event) {
    console.log(event)
setGameFormData({...gameFormData, [event.target.name] : event.target.value})
console.log(gameFormData)
}

const handleSubmit = async (e) => {
e.preventDefault();
try{
    await fetch("http://localhost:3000/games", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gameFormData),
    });

    setGameFormData({title: "", studio: "", platforms: "", released: ""});

    getNewGame();

} catch (error) {
console.error("error posting game", error);
}

};

    return(
<div>

<form onSubmit={handleSubmit}>
<input name="title" placeholder="Enter Game Title" onChange={handleChange} required></input>
<input name="studio" placeholder="Enter Game Studio" onChange={handleChange} required></input>
<input name="platforms" placeholder="On What Platforms?" onChange={handleChange} required></input>
<input name="released" placeholder="When Was This Released?" onChange={handleChange} required></input>
<button type="submit">Submit</button>
</form>
</div>
    )
}