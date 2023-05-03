import React from 'react'
import MyProfileInfo from '../../components/mypage/MyProfileInfo'
import MyContentInfo from '../../components/mypage/MyContentInfo'
import { Box } from '@mui/material'

const MyPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <MyProfileInfo />
      <MyContentInfo />
    </Box>
  )
}

export default MyPage
