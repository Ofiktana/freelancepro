import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
