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
    element: <AppLayout username="Player" level={5} score={1250} />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/stats', element: <Stats /> },
      { path: '/leaderboard', element: <Leaderboard /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
