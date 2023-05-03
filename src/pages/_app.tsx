import React from 'react'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReviewRegister from './review/register'
import Layout from '../components/common/layout'
import LoginPage from './login'
import MyPage from './mypage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/review/register" element={<ReviewRegister />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
