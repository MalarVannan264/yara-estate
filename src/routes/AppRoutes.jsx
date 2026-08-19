import { Navigate, useRoutes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Collections from '../pages/Collections'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Iconic8 from '../pages/latest/Iconic8'
import Avante from '../pages/latest/Avante'
import Wellington from '../pages/latest/Wellington'
import Vanam from '../pages/latest/Vanam'
import Infinity from '../pages/latest/Infinity'

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
              { path: 'infinity', element: <Infinity /> },
          { path: 'wellington', element: <Wellington /> },
          { path: 'vanam', element: <Vanam /> },
        ],
      },
      { path: '*', element: <Navigate replace to="/" /> },
    ],
  },
]

const AppRoutes = () => useRoutes(routeConfig)

export default AppRoutes
