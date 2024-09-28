import { useState } from "react";

const GameForm = () => {
  const [formData, setFormData] = useState({ title: "", studio: "", platforms: "", released: "" });
const [gameResult, setGameResult] = useState([])


  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log("post", formData )
    const result =  await fetch("http://localhost:5432/games", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const parse = await result.json()
setGameResult(parse.success);

      //setFormData({ title: "", studio: "", platforms: "", released: "" }); 

    } catch (error) {
      console.error("Error posting message:", error);
    }
  };

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData); // You may not see the latest update immediately
  };

  console.log("body", formData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Game Title"
          required
        />
        <input
          name="studio"
          onChange={handleChange}
          placeholder="Game Studio"
          required
        />
        <input
          name="platforms"
          onChange={handleChange}
          placeholder="Game platform"
          required
        />
        <input
        type="date"
          name="released"
          onChange={handleChange}
          placeholder="When was this released?"
          required
        />
        <button type="submit">submit</button>
      </form>
      {gameResult && <div>{gameResult.title}</div>}
    </div>
  );
};

export default GameForm;