import { useState } from "react"
import { Reward } from "./types"
import "./assets/styles/layout.scss"

import Navigation from "./components/Navigation/Navigation"
import Header from "./components/Header/Header"
import Status from "./components/Status/Status"
import About from "./components/About/About"

import MasterCraftLogo from "./assets/images/logo-mastercraft.svg"
import SelectionModal from "./components/SelectionModal/SelectionModal"
import ModalSuccess from "./components/ModalSuccess/ModalSuccess"

const rewards: Reward[] = [
  {
    name: "Bamboo Stand",
    minPledge: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    stock: 115,
  },
  {
    name: "Black Edition Stand",
    minPledge: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    stock: 64,
  },
  {
    name: "Mahogany Special Edition",
    minPledge: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    stock: 0,
  },
]

function App() {
  const [selectedOption, setSelectedOption] = useState<string>()
  const [isScrollDisable, setIsScrollDisable] = useState(false)
  const [isSelectionModalActive, setSelectionModalActive] = useState(false)
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)

  const submitHandler = ({
    selectedOption,
    amount,
  }: {
    selectedOption: Reward | string
    amount: number
  }) => {
    let finalAmount = amount
    if (typeof selectedOption === "string") {
      if (Number.isNaN(amount)) {
        finalAmount = 1
      }
    } else {
      if (Number.isNaN(amount)) {
        finalAmount = selectedOption.minPledge
      }
    }

    console.log(selectedOption, finalAmount)
    showSuccessModal()
  }

  const showSuccessModal = () => {
    setIsSuccessModalVisible(true)
    setSelectionModalActive(false)
  }

  const hideSuccessModal = () => {
    setIsSuccessModalVisible(false)
  }

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

      {(isSelectionModalActive || isSuccessModalVisible) && (
        <>
          <div className="backdrop"></div>
          {isSelectionModalActive ? (
            <SelectionModal
              selected={selectedOption}
              onSubmit={submitHandler}
              isActive={isSelectionModalActive}
              onClose={() => setSelectionModalActive(false)}
              options={rewards}
              campaignTitle="Mastercraft Bamboo Monitor Riser"
            />
          ) : (
            <ModalSuccess
              onClose={() => hideSuccessModal()}
              campaignTitle="Mastercraft Bamboo Monitor Riser"
            />
          )}
        </>
      )}
      <main className="main max-width-700">
        <Header
          logo={MasterCraftLogo}
          companyName="Mastercraft"
          title="Mastercraft Bamboo Monitor Riser"
          description="A beautiful & handcrafted monitor stand to reduce neck and eye strain."
          onCtaClicked={() => setSelectionModalActive(true)}
        />
        <Status
          currentFunding={89914}
          targetFunding={100000}
          totalBackers={5010}
          daysLeft={56}
        />
        <About
          about={[
            `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve 
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.`,
            `Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer 
            to allow notepads, pens, and USB sticks to be stored under the stand.`,
          ]}
          onSelect={(option) => {
            console.log(option)
            setSelectedOption(option)
            setSelectionModalActive(true)
            window.scrollTo({ top: 0 })
          }}
          rewards={rewards}
        />
      </main>
    </div>
  )
}

export default App
