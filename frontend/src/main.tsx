import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'

import Landing from './pages/Landing.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import { AppLayout } from './components/shared/AppLayout.tsx'
import Home from './pages/Home.tsx'
import Stats from './pages/Stats.tsx'
import Leaderboard from './pages/Leaderboard.tsx'
import Settings from './pages/Settings.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <AppLayout username="Player" level={5} score={1250} hearts={3} />,
  },
  {
    path: '/stats',
    element: <AppLayout username="Player" level={5} score={1250} hearts={3} />,
  },
  {
    path: '/leaderboard',
    element: <AppLayout username="Player" level={5} score={1250} hearts={3} />,
  },
  {
    path: '/settings',
    element: <AppLayout username="Player" level={5} score={1250} hearts={3} />,
  },  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
