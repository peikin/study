import React from 'react'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReviewRegister from './review/register'
import Layout from '../components/common/layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/review/register" element={<ReviewRegister />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
