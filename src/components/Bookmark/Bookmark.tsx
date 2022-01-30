import styles from "./Bookmark.module.scss"
import { ReactComponent as IconBookmark } from "../../assets/images/icon-bookmark.svg"
import { useEffect, useRef, useState } from "react"

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const bookmarkHandler = () => {
    setIsBookmarked((state) => !state)
  }

  return (
    <div
      onClick={bookmarkHandler}
      className={`${styles.bookmark} __bookmark ${isBookmarked && "marked"}`}
    >
      <input
        type="checkbox"
        readOnly
        checked={isBookmarked}
        className={styles.checkbox}
      />
      <IconBookmark />
      <span className={styles.label}>Bookmark</span>
    </div>
  )
}

export default Bookmark
