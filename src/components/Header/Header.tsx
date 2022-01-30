import { FC } from "react"
import Bookmark from "../Bookmark/Bookmark"
import Button from "../Button/Button"
import styles from "./Header.module.scss"

interface HeaderProps {
  logo: string
  companyName: string
  title: string
  description: string
}
const Header: FC<HeaderProps> = ({ logo, companyName, title, description }) => {
  return (
    <header className={`card ${styles.header}`}>
      <img className={styles.logo} src={logo} alt={`${companyName} logo`} />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.cta}>
        <Button>Back this project</Button>
        <Bookmark />
      </div>
    </header>
  )
}

export default Header
