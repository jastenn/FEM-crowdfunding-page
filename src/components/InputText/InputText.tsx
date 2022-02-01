import React, { FC, FormEventHandler } from "react"
import styles from "./InputText.module.scss"

interface InputTextProps {
  value: string
  type?: "number"
  min: number
  onValueChange: (value: string) => void
  className?: string
}
const InputText: FC<InputTextProps> = ({
  value,
  onValueChange,
  min = 0,
  type = "number",
  className = "",
}) => {
  const inputHandler: FormEventHandler<HTMLInputElement> = (e) => {
    const el = e.target as HTMLInputElement
    onValueChange(el.value)
  }

  const blurHandler: FormEventHandler<HTMLInputElement> = () => {
    if (value === "" || parseInt(value) < min) {
      onValueChange(min.toString())
    }
  }

  return (
    <div className={`${className} ${styles.input}`}>
      <span className={styles.sign}>$</span>
      <input
        className="input-text"
        value={value}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault()
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            if (parseInt(value) > min) return
            e.preventDefault()
          }
        }}
        onChange={inputHandler}
        onBlur={blurHandler}
        type={type}
      />
    </div>
  )
}

export default InputText
