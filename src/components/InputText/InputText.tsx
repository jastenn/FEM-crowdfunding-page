import React, {
  InputHTMLAttributes,
  FC,
  useState,
  FormEventHandler,
  useEffect,
} from "react"
import styles from "./InputText.module.scss"

interface InputTextProps {
  type?: "number"
  min: number
  onValueChange: (value: string) => void
  className?: string
}
const InputText: FC<InputTextProps> = ({
  onValueChange,
  min = 0,
  type = "number",
  className = "",
}) => {
  const [value, setValue] = useState<string>(`${min}`)

  const inputHandler: FormEventHandler<HTMLInputElement> = (e) => {
    const el = e.target as HTMLInputElement
    setValue(el.value)
  }

  const blurHandler: FormEventHandler<HTMLInputElement> = () => {
    if (value === "" || parseInt(value) < min) {
      setValue(min.toString())
    }
  }

  useEffect(() => {
    onValueChange(value)
  }, [value])

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
