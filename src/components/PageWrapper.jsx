import { motion as Motion } from 'motion/react'

const PageWrapper = ({ children }) => (
  <Motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className="flex w-full h-full grow"
  >
    {children}
  </Motion.div>
)

export default PageWrapper