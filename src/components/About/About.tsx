import React, { FC } from "react"
import styles from "./About.module.scss"
import type { Reward } from "../../types"
import { en } from "../../utils/numberFormatter"
import Button from "../Button/Button"

interface AboutProps {
  about: string[]
  rewards: Reward[]
}

const About: FC<AboutProps> = ({ about, rewards }) => {
  return (
    <div className={`card`}>
      <h3 className={styles.heading}>About this project</h3>
      <p className={styles.content}>
        {about.map((paragraph) => paragraph && <div>{paragraph}</div>)}
      </p>
      <div className={styles.rewardsList}>
        {rewards.map((reward) => (
          <div className={`${styles.reward} card-item`}>
            <div className="heading">
              <h4 className="label">{reward.name}</h4>
              <p className="condition">
                Pledge ${en.format(reward.minPledge)} or more
              </p>
            </div>
            <p className={styles.description}>{reward.description}</p>
            <div className={styles.ctaContainer}>
              <p className={styles.stock}>
                <strong>{reward.stock}</strong>left
              </p>
              <Button>Select Reward</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
