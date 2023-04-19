import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
} from '@mui/material'
import { useRecoilState } from 'recoil'
import { FEEDBACK_TYPE, feedbackTypeState } from '../../recoil/atoms/review'

const FeedBackType = () => {
  const [feedback, setFeedBack] = useRecoilState(feedbackTypeState)

  return (
    <Box sx={{ pt: 2 }}>
      <Card className="feedback-card">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5">
            작성하려는 의견은 어떤 타입인가요?
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant={
              feedback === FEEDBACK_TYPE.COMPLIMENT ? 'contained' : 'outlined'
            }
            onClick={() => setFeedBack(FEEDBACK_TYPE.COMPLIMENT)}
          >
            칭찬
          </Button>
          <Button
            color="primary"
            variant={
              feedback === FEEDBACK_TYPE.IMPROVEMENT ? 'contained' : 'outlined'
            }
            onClick={() => setFeedBack(FEEDBACK_TYPE.IMPROVEMENT)}
          >
            개선
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default FeedBackType
