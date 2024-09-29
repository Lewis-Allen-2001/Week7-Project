import { useState } from "react";
import FormatDate from "../../Utils/FormatDate";
import "./GameForm.css"

export default function GameForm(){
  const [formData, setFormData] = useState({ title: "", studio: "", platforms: "", released: "" });
  const [gameResult, setGameResult] = useState(() => {
    const storedResult = localStorage.getItem("gameResult");
    return storedResult ? JSON.parse(storedResult) : null; 
  });

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      console.log("post", formData);
      const result = await fetch("http://localhost:5432/TalkToUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const parse = await result.json();
  
      if (parse.success) {
        setGameResult(parse.success);
  
        // Save the result to localStorage so it persists
        localStorage.setItem("gameResult", JSON.stringify(parse.success));
      }
  
      // Optionally reset the form if needed
      // setFormData({ title: "", studio: "", platforms: "", released: "" });
  
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
    <div className="GameForm">
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Game Title"
          value={formData.title}
          required
        />

        <input
          name="studio"
          onChange={handleChange}
          placeholder="Game Studio"
          value={formData.studio}
          required
        />
        <input
          name="platforms"
          onChange={handleChange}
          placeholder="Game platform"
          value={formData.platforms}
          required
        />
        <input
          type="date"
          name="released"
          onChange={handleChange}
          placeholder="When was this released?"
          value={formData.released}
          required
        />

      
        <button type="submit">Submit</button>
      </form>
  
      {gameResult && (
        <div className="GameResult">
          <div>{gameResult.title}</div>
          <div>{gameResult.studio}</div>
          <div>{gameResult.platforms}</div>
          <div>{gameResult.released && <FormatDate date={gameResult.released} />}</div>
        </div>
      )}
    </div>
  );
  
};
