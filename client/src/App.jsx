import { Route, Routes } from "react-router-dom";
import LatestReleases from "./components/Pages/LatestReleases";
import Home from "./components/Pages/Home";
import GameDetails from "./components/Pages/GameDetails"
import Header from "./components/Header"
import "./App.css"


export default function App() {
  

  return (
    <>
<Header/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/games" element={<LatestReleases/>}/>
      <Route path="/games/:id" element={<GameDetails/>}/>
    </Routes>
    </>
  )
}


