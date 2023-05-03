import React from 'react'
import { Box, Divider, Grid, Icon, Link, Typography } from '@mui/material'
import { AiFillCrown, AiOutlineRight } from 'react-icons/ai'
import Container from '@mui/material/Container'

const MyContentInfo = () => {
  return (
    <Container sx={{ py: 5, px: 2 }}>
      <Box>
        <Link
          href="#"
          underline="none"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#f8f8f8',
            py: 2,
          }}
        >
          <Typography>내가 작성한 글</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'flex-center' }}>
            0개
            <Icon fontSize="small">
              <AiOutlineRight />
            </Icon>
          </Typography>
        </Link>

        <Divider sx={{ backgroundColor: '#f8f8f8' }} />

        <Link
          href="#"
          underline="none"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#f8f8f8',
            py: 2,
          }}
        >
          <Typography>내가 누른 공감글</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'flex-center' }}>
            0개
            <Icon fontSize="small">
              <AiOutlineRight />
            </Icon>
          </Typography>
        </Link>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 3 }}>
          <Grid item xs={1} sm={1}>
            <Link
              href="#"
              underline="none"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#f8f8f8',
                p: 2.5,
                borderRadius: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography variant="h6" component="p" sx={{ fontSize: 16 }}>
                채택수
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'flex-center' }}>
                <Icon fontSize="small">
                  <AiFillCrown />
                </Icon>
                0개
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Link
              href="#"
              underline="none"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#f8f8f8',
                p: 2.5,
                borderRadius: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography variant="h6" component="p" sx={{ fontSize: 16 }}>
                채택수
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'flex-center' }}>
                <Icon fontSize="small">
                  <AiFillCrown />
                </Icon>
                0개
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={1} sm={1}>
            <Link
              href="#"
              underline="none"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                color: '#f8f8f8',
                p: 2.5,
                borderRadius: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Typography variant="h6" component="p" sx={{ fontSize: 16 }}>
                채택수
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'flex-center' }}>
                <Icon fontSize="small">
                  <AiFillCrown />
                </Icon>
                0개
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default MyContentInfo
