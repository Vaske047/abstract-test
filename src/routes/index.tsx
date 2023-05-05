import { Suspense, Profiler } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainLayout from '../components/MainLayout'
import SingleRepository from '../components/SingleRepository'

const AppRouter = () => (
  <BrowserRouter>
    <Profiler id='app' onRender={() => {}}>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/single-repository' element={<SingleRepository />} />
        </Routes>
      </Suspense>
    </Profiler>
  </BrowserRouter>
)

export default AppRouter
