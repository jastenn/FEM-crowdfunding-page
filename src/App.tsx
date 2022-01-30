import React, { useState } from "react"
import logo from "./logo.svg"
import Navigation from "./components/Navigation/Navigation"
import "./assets/styles/layout.scss"
import Header from "./components/Header/Header"

import MasterCraftLogo from "./assets/images/logo-mastercraft.svg"

function App() {
  const [isScrollDisable, setIsScrollDisable] = useState(false)

  return (
    <div className={`App ${isScrollDisable && "disable-scroll"}`}>
      <div className="header">
        <Navigation
          className="max-width-1100"
          navLinks={["about", "discover", "get started"]}
          onStateChange={(active) => {
            setIsScrollDisable(active)
          }}
        />
      </div>

      <main className="main max-width-700">
        <Header
          logo={MasterCraftLogo}
          companyName="Mastercraft"
          title="Mastercraft Bamboo Monitor Riser"
          description="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
        />
      </main>
    </div>
  )
}

export default App
