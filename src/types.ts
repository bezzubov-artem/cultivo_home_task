import { StaticImageData } from 'next/image'

export interface IBannerProps {
  onClick: () => void
  content: {
    header: string
    text: string
    list: string[]
    buttonText: string
    nextStep?: string
  }
  imageSrc: string | StaticImageData
  isDisplayed?: boolean
}

export type BannerProps = Partial<IBannerProps & IBannerProps['content']>
