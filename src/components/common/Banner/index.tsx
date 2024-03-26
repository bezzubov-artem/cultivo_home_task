'use client'

import { IBannerProps } from '@/types'
import BannerButton from './BannerButton'
import BannerContent from './BannerContent'
import BannerHeader from './BannerHeader'
import styles from './styles.module.css'

const Banner: React.FC<IBannerProps> = ({
  onClick = () => {},
  content: {
    header = '',
    nextStep = '',
    text = '',
    list = [],
    buttonText = '',
  },
  imageSrc,
  isDisplayed = false,
}) => {
  return (
    <div className={styles.banner}>
      <BannerHeader imageSrc={imageSrc} header={header} nextStep={nextStep} />
      <BannerContent text={text} list={list} isDisplayed={isDisplayed!} />
      <BannerButton buttonText={buttonText} onClick={onClick} />
    </div>
  )
}

export default Banner
