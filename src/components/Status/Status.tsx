import { FC, useEffect, useState } from "react"
import styles from "./Status.module.scss"
import { en } from "../../utils/numberFormatter"

interface StatusProps {
  currentFunding: number
  targetFunding: number
  totalBackers: number
  daysLeft: number
}

const Status: FC<StatusProps> = ({
  currentFunding,
  targetFunding,
  totalBackers,
  daysLeft,
}) => {
  const [progress, setProgress] = useState(
    (currentFunding / targetFunding) * 100
  )
  useEffect(() => {
    console.log(progress)
  }, [progress])
  return (
    <div className={`${styles.status} card`}>
      <div className={styles.main}>
        <div>
          <h4 className={styles.value}>${en.format(currentFunding)}</h4>
          <p className={styles.label}>of ${en.format(targetFunding)} backed</p>
        </div>

        <div>
          <h4 className={styles.value}>${en.format(totalBackers)}</h4>
          <p className={styles.label}>
            total {totalBackers > 1 ? "backers" : "backer"}
          </p>
        </div>

        <div>
          <h4 className={styles.value}>{daysLeft}</h4>
          <p className={styles.label}>{daysLeft > 1 ? "days" : "day"} left</p>
        </div>
      </div>

      <div className={styles.progressBar}>
        <div
          aria-label={`${progress} backed`}
          className={styles.progress}
          style={{ width: `${progress}%` }}
        />
        <div className={styles.track} />
      </div>
    </div>
  )
}

export default Status
