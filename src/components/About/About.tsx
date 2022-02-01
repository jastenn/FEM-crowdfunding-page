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
        {about.map(
          (paragraph, idx) =>
            paragraph && (
              <span key={idx} className={styles.paragraph}>
                {paragraph}
              </span>
            )
        )}
      </p>
      <ul className={styles.rewardsList}>
        {rewards.map((reward) => (
          <li key={reward.name} className={`${styles.reward} card-item`}>
            <div className="heading">
              <p className="label">{reward.name}</p>
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
          </li>
        ))}
      </ul>
    </div>
  )
}

export default About
