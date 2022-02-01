import React, {
  FC,
  Fragment,
  MouseEventHandler,
  useEffect,
  useState,
} from "react"
import styles from "./SelectionModalOptions.module.scss"
import type { Reward } from "../../types"
import InputText from "../InputText/InputText"
import Button from "../Button/Button"

interface SelectionModalOptionsProps {
  selected?: string | undefined
  options: Reward[]
  onChangeSelection?: (state: string) => void
  onSubmit: ({
    selectedOption,
    amount,
  }: {
    selectedOption: string
    amount: number
  }) => void
}

const SelectionModalOptions: FC<SelectionModalOptionsProps> = ({
  options,
  onSubmit,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>()
  const [pledgeAmount, setPledgeAmount] = useState<string>("")

  const pledgeInputHandler = (newValue: string) => {
    setPledgeAmount(newValue)
  }

  const submitHandler = (selectedOption: string, e: any) => {
    e.preventDefault()
    onSubmit({ selectedOption, amount: parseInt(pledgeAmount) })
  }

  // useEffect(
  //   () => () => {
  //     setPledgeAmount("")
  //     setSelectedOption("")
  //   },
  //   []
  // )

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
          readOnly
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
                  value={pledgeAmount}
                  onValueChange={pledgeInputHandler}
                  min={1}
                  aria-labelledby="pledge-input-label"
                />

                <Button
                  onClick={(e) => {
                    submitHandler("no reward", e)
                  }}
                >
                  Continue
                </Button>
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
                      value={pledgeAmount}
                      onValueChange={pledgeInputHandler}
                      min={reward.minPledge}
                      aria-labelledby="pledge-input-label"
                    />

                    <Button
                      onClick={(e) => {
                        submitHandler(reward.name, e)
                      }}
                    >
                      Continue
                    </Button>
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
