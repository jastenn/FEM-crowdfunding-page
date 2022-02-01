import React, { FC } from "react"
import type { Reward } from "../../types"
import styles from "./ModalSuccess.module.scss"

import Button from "../Button/Button"
import { ReactComponent as IconCheck } from "../../assets/images/icon-check.svg"

interface ModalSuccessProps {
  onClose: () => void
  campaignTitle: string
}

const ModalSuccess: FC<ModalSuccessProps> = ({ onClose, campaignTitle }) => {
  return (
    <div className={`card ${styles.modal} max-width-700`}>
      <IconCheck className={styles.icon} />
      <h3 className={styles.heading}>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing {campaignTitle}
        worldwide. You will get an email once our campaign is completed
      </p>
      <Button onClick={() => onClose()}>Got it!</Button>
    </div>
  )
}

export default ModalSuccess
