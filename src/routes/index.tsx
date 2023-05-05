import { Suspense, Profiler } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import RepositoryList from '../components/RepositoryList'
import SingleRepository from '../components/SingleRepository'

const AppRouter = () => (
  <BrowserRouter>
    <Profiler id='app' onRender={() => {}}>
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<RepositoryList />} />
          <Route path='/single-repository' element={<SingleRepository />} />
        </Routes>
      </Suspense>
    </Profiler>
  </BrowserRouter>
)

export default AppRouter
