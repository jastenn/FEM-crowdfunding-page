import React, { useState } from "react"
import "./assets/styles/layout.scss"

import Navigation from "./components/Navigation/Navigation"
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"

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
        <Status
          currentFunding={89914}
          targetFunding={100000}
          totalBackers={5010}
          daysLeft={56}
        />
      </main>
    </div>
  )
}

export default App
