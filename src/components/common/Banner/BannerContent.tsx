import { BannerProps } from '@/types'
import styles from './styles.module.css'

const BannerText: React.FC<BannerProps> = ({ text, list, isDisplayed }) => {
  return (
    <div className={styles.text}>
      <p>{text}</p>
      {isDisplayed && (
        <ul className={styles.list}>
          {list?.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BannerText
