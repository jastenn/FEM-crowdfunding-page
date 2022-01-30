/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState } from "react"
import Logo from "../../assets/images/logo.svg"
import { CSSTransition } from "react-transition-group"
import styles from "./Navigation.module.scss"
import "./animations.scss"

interface NavigationProps {
  className?: string
  navLinks: string[]
  onStateChange?: (state: boolean) => void
}

const Navigation: FC<NavigationProps> = ({
  onStateChange,
  navLinks,
  className,
}) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!onStateChange) return

    onStateChange(isActive)
  }, [isActive, onStateChange])

  return (
    <>
      <CSSTransition in={isActive} timeout={300} classNames="backdrop-fade">
        <div className={styles.backdrop}></div>
      </CSSTransition>
      <nav
        className={`${className ?? ""} ${isActive && styles.active} ${
          styles.nav
        }`}
      >
        <div className={styles.main}>
          <a className={styles.logo} href="#">
            <img src={Logo} alt="crowd sourcing logo" />
          </a>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`${styles.hamburger} `}
            name="hamburger"
          >
            <div></div>
          </button>
        </div>

        <CSSTransition in={isActive} timeout={300} classNames="nav-ease">
          <ul className={styles.navLinks}>
            {navLinks.map((navLink) => (
              <li key={navLink}>
                <a href="#">{navLink}</a>
              </li>
            ))}
          </ul>
        </CSSTransition>
      </nav>
    </>
  )
}

export default Navigation
