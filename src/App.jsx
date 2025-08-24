import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="flex w-full h-full grow"
  >
    {children}
  </motion.div>
)

function App() {

  const location = useLocation();

  return (
    <div className='bg-gray-400'>  
      <main className='max-w-[375px] min-h-[812px] bg-[#F7F8F9] mx-auto flex flex-col'>

          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              
              <Route index element={<PageWrapper><LandingPage /></PageWrapper>} />
              <Route path='login' element={<PageWrapper><LoginPage /></PageWrapper>} />
              <Route path='signup' element={<PageWrapper><SignUpPage /></PageWrapper>} />
              <Route path='profile' element={<PageWrapper><ProfilePage /></PageWrapper>} />

            </Routes>
          </AnimatePresence>

      </main>
    </div>
  )
}

export default App