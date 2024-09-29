import { Route, Routes } from "react-router-dom";
import GameList from "./MainComponents/Pages/GameList";
import Home from "./MainComponents/Pages/Home";
import GameDetails from "./MainComponents/Pages/GameDetails"
import Header from "./MainComponents/Header"
import TrendingGames from "./MainComponents/Pages/TrendingGames";
import TalkToUs from "./MainComponents/Pages/TalkToUs";
import "./App.css"



export default function App() {
  

  return (
    <>
<Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/games" element={<GameList/>}/>
      <Route path="/games/:id" element={<GameDetails/>}/>
      <Route path="/Trending" element={<TrendingGames/>}/>
      <Route path="/TalkToUs" element={<TalkToUs/>}/>
    </Routes>
    </>
  )
}


