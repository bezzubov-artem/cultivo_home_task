'use client'

import { useEffect, useState } from 'react'
import { ContactFormDialog } from './ContactFormDialog'

import bannerHeaderImg from '../assets/icons8-analyze.png'
import Banner from './common/Banner'

const bannerContent = {
  unsubmitted: {
    nextStep: 'Next Step',
    header: 'Expert Report',
    text: 'Please get in touch if you would like an expert report for this site. Benefits include:',
    list: [
      'Key insights from our expert team',
      'An in-depth analysis of the site',
      'Recommendations of next steps to take',
    ],
    buttonText: 'Get In Touch',
  },
  submitted: {
    header: 'Expert Report Requested',
    text: 'We received your message. Please feel free to get in touch again if you would like to include any further details or ask any other questions. We are eager to assist you.',
    list: [],
    buttonText: 'Send Another Message',
  },
}

const ExpertReportBanner: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('isExportReportFormSubmitted')
    ) {
      setIsSubmitted(true)
    }
  }, [])

  const onClose = () => {
    setOpen(false)
  }

  const onClick = () => {
    setOpen(true)
  }

  const currentBannerContent = isSubmitted
    ? bannerContent.submitted
    : bannerContent.unsubmitted

  const onFormSubmitted = (message = '') => {
    setIsSubmitted(true)
    localStorage.setItem('isExportReportFormSubmitted', 'true')
    // if we want to check this isExportReportFormSubmitted flag on server-side, first of all we need to integrate user authentication, also we need to
    // use database for our application, implement server-side endpoints for handling submissions and retrieving status, and for every authorised user we should check this flag first and
    // also send and store this flag value in database on form submission

    //also if we want to send this message to Slack, we can use Slack API, for example, we can create webhook and use it, sending POST requests using webhook url with
  }

  return (
    <>
      <Banner
        content={currentBannerContent}
        imageSrc={bannerHeaderImg}
        onClick={onClick}
        isDisplayed={!isSubmitted}
      />
      <ContactFormDialog
        open={open}
        onClose={onClose}
        onFormSubmitted={onFormSubmitted}
      />
    </>
  )
}

export default ExpertReportBanner
