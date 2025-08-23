import { BrowserRouter , Routes, Route } from 'react-router'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <div className='bg-gray-700'>  
      <main className='max-w-[375px] min-h-[812px] bg-[#F7F8F9] mx-auto flex flex-col'>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App