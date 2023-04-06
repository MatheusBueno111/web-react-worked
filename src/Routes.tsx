import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
  {
    path: 'qualquer',
    element: <h1>ola</h1>,
  },
])
