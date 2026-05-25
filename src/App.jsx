import { useEffect, useState } from 'react'
import Loader from './components/common/Loader'
import AppRoutes from './routes/AppRoutes'
import { useLenis } from './hooks/useLenis'

function App() {
  const [isBooting, setIsBooting] = useState(true)

  useLenis()

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsBooting(false)
    }, 1200)

    return () => window.clearTimeout(timeoutId)
  }, [])

  if (isBooting) {
    return <Loader />
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-bg text-brand-text">
      <div className="bg-noise pointer-events-none fixed inset-0 opacity-50" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-48 bg-gold-glow opacity-50 blur-3xl" />
      <AppRoutes />
    </div>
  )
}

export default App
