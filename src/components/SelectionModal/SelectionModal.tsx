import { FC } from "react"
import styles from "./SelectionModal.module.scss"
import type { Reward } from "../../types"

import { ReactComponent as CloseModal } from "../../assets/images/icon-close-modal.svg"
import SelectionModalOptions from "../SelectionModalOptions/SelectionModalOptions"

interface SelectionModalProps {
  isActive: boolean
  onClose: () => void
  selected?: string
  campaignTitle: string
  options: Reward[]
  onSubmit: ({
    selectedOption,
    amount,
  }: {
    selectedOption: Reward | string
    amount: number
  }) => void
}

const SelectionModal: FC<SelectionModalProps> = ({
  onClose,
  options,
  campaignTitle,
  onSubmit,
}) => {
  return (
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
        Want to support us in bringing {campaignTitle} out in the world?
      </p>

      <SelectionModalOptions onSubmit={onSubmit} options={options} />
    </div>
  )
}

export default SelectionModal
