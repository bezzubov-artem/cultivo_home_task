import { BannerProps } from '@/types'
import { Button } from '@mui/material'
import styles from './styles.module.css'

const BannerButton: React.FC<BannerProps> = ({ buttonText, onClick }) => {
  return (
    <Button onClick={onClick} className={styles.button}>
      {buttonText}
    </Button>
  )
}

export default BannerButton
