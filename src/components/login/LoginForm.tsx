import React from 'react'
import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import { useForm, useFormState } from 'react-hook-form'

interface FormInputs {
  id: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormInputs>()
  const { errors } = useFormState({ control })

  const onLoginSubmit = () => {
    window.location.href = '/mypage'
  }

  return (
    <Box
      component="form"
      sx={{ pt: 2 }}
      autoComplete="off"
      onSubmit={handleSubmit(onLoginSubmit)}
    >
      <TextField
        fullWidth
        error={!!errors.id}
        id="fullWidth"
        label="아이디를 입력해주세요."
        variant="outlined"
        sx={{ mb: 2 }}
        helperText={errors.id ? '아이디를 입력해주세요.' : ''}
        {...register('id', { required: '아이디를 입력해주세요.' })}
      />

      <TextField
        fullWidth
        error={!!errors.password}
        type="password"
        id="fullWidth"
        label="비밀번호를 입력해주세요."
        variant="outlined"
        sx={{ mb: 3 }}
        helperText={errors.password ? '비밀번호를 입력해주세요.' : ''}
        {...register('password', { required: '비밀번호를 입력해주세요.' })}
      />

      <Button
        fullWidth
        type="submit"
        variant="contained"
        size="large"
        sx={{ mb: 1 }}
      >
        로그인
      </Button>
      <Button fullWidth variant="contained" size="large">
        회원가입
      </Button>
    </Box>
  )
}

export default LoginForm
