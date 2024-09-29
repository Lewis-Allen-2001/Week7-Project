import NavBar from "./NavBar"

export default function Header () {

    return(
        <div className="HeaderContainer"> 
            <img src="/Game-Grid-Logo.webp" alt="Logo"/>
        <h1>Game Grid!</h1>
        <h3>All your gaming needs in one place!</h3>
        <NavBar/>
    </div>


    )

}