import { FC, useEffect, useState } from "react"
import styles from "./Status.module.scss"

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
          <h4 className={styles.value}>${currentFunding}</h4>
          <p className={styles.label}>of ${targetFunding} backed</p>
        </div>
        <div>
          <h4 className={styles.value}>{totalBackers}</h4>
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
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
        <div className={styles.track}></div>
      </div>
    </div>
  )
}

export default Status
