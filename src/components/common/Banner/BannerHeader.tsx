import { BannerProps } from '@/types'
import Image from 'next/image'
import styles from './styles.module.css'

const BannerHeader: React.FC<BannerProps> = ({
  header,
  nextStep,
  imageSrc,
  isDisplayed,
}) => {
  return (
    <div className={styles.background_image_and_header}>
      <Image src={imageSrc!} alt='' />
      {isDisplayed && <p>{nextStep}</p>}
      <p className={styles.header}>{header}</p>
    </div>
  )
}

export default BannerHeader
