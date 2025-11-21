import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Demo2 = lazy(() => import('./pages/Demo2'))
const Factory3D = lazy(() => import('./pages/Factory3D'))

const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Demo2 />} />
        <Route path="/factory-3d" element={<Factory3D />} />
        {/* Catch all routes - redirect to Demo2 for SPA routing */}
        <Route path="*" element={<Demo2 />} />
      </Routes>
    </Suspense>
  )
}

export default App
