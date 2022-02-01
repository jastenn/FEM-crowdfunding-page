import { FC } from "react"
import styles from "./SelectionModal.module.scss"
import type { Reward } from "../../types"
import { CSSTransition } from "react-transition-group"

import { ReactComponent as CloseModal } from "../../assets/images/icon-close-modal.svg"
import SelectionModalOptions from "../SelectionModalOptions/SelectionModalOptions"

interface SelectionModal {
  isActive: boolean
  onClose: () => void
  selected?: string
  title: string
  options: Reward[]
  onSubmit: ({
    selectedOption,
    amount,
  }: {
    selectedOption: string
    amount: number
  }) => void
}

const SelectionModal: FC<SelectionModal> = ({
  isActive,
  onClose,
  options,
  title,
  onSubmit,
  selected,
}) => {
  return (
    <>
      <div className={styles.backdrop} />

      <div className={`card max-width-700 ${styles.modal}`}>
        <div className={styles.heading}>
          <h3>Back this project</h3>
          <button
            tabIndex={10}
            className={styles.closeBtn}
            aria-label="close"
            type="button"
            onClick={() => onClose()}
          >
            <CloseModal />
          </button>
        </div>

        <p className={styles.description}>
          Want to support us in bringing {title} out in the world?
        </p>

        <SelectionModalOptions onSubmit={onSubmit} options={options} />
      </div>
    </>
  )
}

export default SelectionModal
