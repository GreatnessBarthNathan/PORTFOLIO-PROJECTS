import React from "react"
import { useGlobalContext } from "./context"
import Navbar from "./Components/Navbar"
import Submenu from "./Components/Submenu"
import TopStories from "./Components/TopStories/topStories"
import Videos from "./Components/Videos/Videos"
import PremierLeague from "./Components/PremierLeague/PremierLeague"
import AfricanAllStars from "./Components/AfricanAllStars/AfricanAllStars"
import Transfers from "./Components/Transfers/Transfers"
import PrimeraDivision from "./Components/PrimeraDivision/PrimeraDivision"
import ChampionsLeague from "./Components/ChampionsLeague/ChampionsLeague"
import Footer from "./Components/Footer/Footer"
import SideBar from "./Components/SideBar"

function App() {
  const { removeSubmenu } = useGlobalContext()
  return (
    <main className='wrapper'>
      <Navbar />
      <SideBar />
      <Submenu />
      <TopStories />
      <Videos />
      <PremierLeague />
      <AfricanAllStars />
      <Transfers />
      <PrimeraDivision />
      <ChampionsLeague />
      <Footer />
    </main>
  )
}

export default App
