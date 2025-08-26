import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import useAuthStore from './store/authStore'
import ProtectedRoute from './routes/ProtectedRoute'

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
  const currentUser = useAuthStore(state => state.currentUser)

  return (
    <div className='bg-gray-400'>  
      <main className='max-w-[375px] min-h-[812px] bg-[#F7F8F9] mx-auto flex flex-col'>

          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>

              <Route index element={
                  <PageWrapper><LandingPage /></PageWrapper>
                }   
              />

              <Route path='login' element={
                  currentUser ? <Navigate to='/profile' replace /> :
                  <PageWrapper><LoginPage /></PageWrapper>
              } />

              <Route path='signup' element={
                  currentUser ? <Navigate to='/profile' replace /> :
                  <PageWrapper><SignUpPage /></PageWrapper>
              } />

              <Route path='profile' element={
                  <ProtectedRoute>
                    <PageWrapper><ProfilePage /></PageWrapper>
                  </ProtectedRoute>
              } />

              <Route path='*' element={<Navigate to={currentUser ? '/profile' : '/'} replace />} />

            </Routes>
          </AnimatePresence>

      </main>
    </div>
  )
}

export default App