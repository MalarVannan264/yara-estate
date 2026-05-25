import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Collections from '../pages/Collections'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Iconic8 from '../pages/latest/Iconic8'
import Avante from '../pages/latest/Avante'

const routeConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'collections', element: <Collections /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {
        path: 'latest',
        children: [
          { index: true, element: <Navigate replace to="iconic-8" /> },
          { path: 'iconic-8', element: <Iconic8 /> },
          { path: 'avante', element: <Avante /> },
        ],
      },
      { path: '*', element: <Navigate replace to="/" /> },
    ],
  },
]

const AppRoutes = () => useRoutes(routeConfig)

export default AppRoutes
