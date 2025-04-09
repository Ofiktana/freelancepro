import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Landing from './pages/Landing'
import { users } from './datasets/users'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing users={users} />} />
          <Route path='/:id' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='profile' element={<Profile />} />
            <Route path='projects' element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

