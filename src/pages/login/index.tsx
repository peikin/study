import React from 'react'
import LoginForm from '../../components/login/LoginForm'
import { Box, Typography } from '@mui/material'
// import SNSLoginButton from '../../components/login/SNSLoginButton'

const LoginPage = () => {
  return (
    <Box sx={{ pt: 3 }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: 'bold', mb: 1 }}
      >
        모두의 리뷰에
        <br />
        로그인 합니다.
      </Typography>
      <Typography variant="body1" component="span">
        모두의 리뷰에 여러분의 리뷰를 남겨보세요!
      </Typography>

      <LoginForm />
      {/*<SNSLoginButton />*/}
    </Box>
  )
}

export default LoginPage
