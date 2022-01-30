import React from "react"
import logo from "./logo.svg"
import Navigation from "./components/Navigation/Navigation"
import "./assets/styles/layout.scss"

function App() {
  return (
    <div className="App">
      <div className="header">
        <Navigation
          className="max-width-1100"
          navLinks={["about", "discover", "get started"]}
        />
      </div>
      <main className="main max-width-700" style={{ backgroundColor: "red" }}>
        123
      </main>
    </div>
  )
}

export default App
