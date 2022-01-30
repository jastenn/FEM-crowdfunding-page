/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from "react"
import Logo from "../../assets/images/logo.svg"
import { CSSTransition } from "react-transition-group"
import styles from "./Navigation.module.scss"
import "./NavEase.scss"

interface NavigationProps {
  className?: string
  navLinks: string[]
}

const Navigation: FC<NavigationProps> = ({ navLinks, className }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className={`${className ?? ""} ${styles.nav}`}>
      <div className={styles.main}>
        <a className={styles.logo} href="#">
          <img src={Logo} alt="crowd sourcing logo" />
        </a>
        <button
          onClick={() => setIsActive(!isActive)}
          className={`${styles.hamburger} ${isActive && styles.active}`}
          name="hamburger"
        >
          <div></div>
        </button>
      </div>

      <CSSTransition in={isActive} timeout={300} classNames="nav-ease">
        {(state) => (
          <ul className={styles.navLinks}>
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <a href="#">{navLink}</a>
              </li>
            ))}
          </ul>
        )}
      </CSSTransition>
    </nav>
  )
}

export default Navigation
