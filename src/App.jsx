import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout/layout'
import HomePage from './pages/homePage/HomePage'
import ListPage from './pages/list/ListPage'
import SinglePage from './pages/singlePage/singlePage'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/list',
          element: <ListPage />,
        },
        {
          path: '/:id',
          element: <SinglePage />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
