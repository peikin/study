import React from 'react'
import '../../components/review/review.css'
import BusinessSelect from '../../components/review/businessSelect'
import FeedBackType from '../../components/review/feedbackType'
import ReviewContents from '../../components/review/contents'
import SubmitButton from '../../components/review/SubmitButton'

const ReviewRegister = () => {
  return (
    <>
      <BusinessSelect />
      <FeedBackType />
      <ReviewContents />
      <SubmitButton />
    </>
  )
}

export default ReviewRegister
