import React, {
  FC,
  useState,
  Fragment,
  FormEventHandler,
  MouseEventHandler,
} from "react"
import styles from "./SelectionModalOptions.module.scss"
import type { Reward } from "../../types"
import InputText from "../InputText/InputText"
import Button from "../Button/Button"

interface SelectionModalOptionsProps {
  selected?: string | undefined
  options: Reward[]
  onChange?: (state: string) => void
}

const SelectionModalOptions: FC<SelectionModalOptionsProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    selected
  )

  const onChangeHandler = () => {
    if (onChange) onChange(selectedOption!!)
  }

  const submitHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log(selectedOption)
  }

  return (
    <form>
      <ul className={styles.options}>
        <input
          type="radio"
          name="reward"
          value="no reward"
          aria-labelledby="no-reward"
          tabIndex={10}
          checked={"no reward" === selectedOption}
          onChange={onChangeHandler}
        />
        <li
          onClick={() => setSelectedOption("no reward")}
          className={`card-item ${styles.option}`}
        >
          <div className="heading">
            <div className={styles.radioContainer}>
              <div className={styles.checkmark} />
            </div>

            <p className="label" id="no-reward">
              Pledge with no reward
            </p>
          </div>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
          {selectedOption === "no reward" && (
            <div className={styles.pledgeInput}>
              <p className={styles.label} id="pledge-input-label">
                Enter your pledge
              </p>
              <div className={styles.row2}>
                <InputText
                  onValueChange={() => {}}
                  min={1}
                  aria-labelledby="pledge-input-label"
                />

                <Button onClick={submitHandler}>Continue</Button>
              </div>
            </div>
          )}
        </li>

        {options.map((reward) => (
          <Fragment key={reward.name}>
            <input
              readOnly
              type="radio"
              name="reward"
              value={reward.name}
              checked={reward.name === selectedOption}
              aria-labelledby={reward.name}
              tabIndex={10}
              disabled={reward.stock <= 0}
            />
            <li
              onClick={() => setSelectedOption(reward.name)}
              className={`card-item ${styles.option}`}
            >
              <div className="heading">
                <div className={styles.radioContainer}>
                  <div className={styles.checkmark} />
                </div>

                <p className="label" id={reward.name}>
                  {reward.name}
                </p>
                <p className="condition">Pledge ${reward.minPledge} or more</p>
              </div>
              <p>{reward.description}</p>
              <p className={styles.stock}>
                <strong>{reward.stock}</strong> left
              </p>

              {selectedOption === reward.name && (
                <div className={styles.pledgeInput}>
                  <p className={styles.label} id="pledge-input-label">
                    Enter your pledge
                  </p>
                  <div className={styles.row2}>
                    <InputText
                      onValueChange={() => {}}
                      min={reward.minPledge}
                      aria-labelledby="pledge-input-label"
                    />

                    <Button onClick={submitHandler}>Continue</Button>
                  </div>
                </div>
              )}
            </li>
          </Fragment>
        ))}
      </ul>
    </form>
  )
}

export default SelectionModalOptions
