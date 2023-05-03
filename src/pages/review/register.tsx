import React from 'react'
import '../../components/review/review.css'
import BusinessSelect from '../../components/review/businessSelect'
import FeedBackType from '../../components/review/feedbackType'
import ReviewContents from '../../components/review/contents'
import SubmitButton from '../../components/review/SubmitButton'
import { Box } from '@mui/material'

const ReviewRegister = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <BusinessSelect />
      <FeedBackType />
      <ReviewContents />
      <SubmitButton />
    </Box>
  )
}

export default ReviewRegister
