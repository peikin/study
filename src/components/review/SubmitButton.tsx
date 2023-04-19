import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import {
  businessState,
  feedbackTypeState,
  contentsState,
} from '../../recoil/atoms/review'

const ReviewSubmitButton = () => {
  const business = useRecoilValue(businessState)
  const feedbackType = useRecoilValue(feedbackTypeState)
  const contents = useRecoilValue(contentsState)

  /**
   * 등록
   */
  const handleSubmit = () => {
    if (!business) {
      alert('기업을 선택해주세요.')
      return
    }
    const payload = {
      business,
      feedbackType,
      contents,
    }
    console.log('payload:', payload)
  }

  return (
    <Box sx={{ pt: 3 }}>
      <Button
        variant="contained"
        fullWidth={true}
        size="large"
        onClick={handleSubmit}
      >
        등록
      </Button>
    </Box>
  )
}

export default ReviewSubmitButton
