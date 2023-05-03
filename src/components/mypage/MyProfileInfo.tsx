import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { AiOutlineRight } from 'react-icons/ai'
import IconButton from '@mui/material/IconButton'
import { MdOutlineEdit } from 'react-icons/md'

const MyProfileInfo = () => {
  const handleClick = () => {
    alert('click!')
  }

  return (
    <Grid
      container
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Grid xs={7} sm={10} sx={{ pr: 2 }}>
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontWeight: 'bold', mb: 1, color: '#f8f8f8' }}
        >
          용마님
        </Typography>
        <Button
          variant="outlined"
          endIcon={<AiOutlineRight />}
          onClick={handleClick}
          size="small"
          sx={{
            color: '#f8f8f8',
            borderColor: '#f8f8f8',
            borderRadius: 20,
            fontSize: 12,
          }}
        >
          이메일을 인증해주세요!
        </Button>
      </Grid>
      <Grid xs={2.5} sm={2} sx={{ position: 'relative' }}>
        <Avatar sx={{ width: { xs: 62, sm: 91 }, height: { xs: 62, sm: 91 } }}>
          나
        </Avatar>
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            backgroundColor: '#f8f8f8',
          }}
        >
          <MdOutlineEdit />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default MyProfileInfo
