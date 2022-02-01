import { FC, ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg"
}

const Button: FC<ButtonProps> = ({ size = "md", children, ...props }) => {
  return (
    <button className={`${styles.button} __button ${size}`} {...props}>
      {children}
    </button>
  )
}

export default Button
