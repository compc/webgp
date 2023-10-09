import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexLogin from './containers/formLogin/index.jsx'
import IndexRegister from './containers/formRegister'
import Dashboard from './pages/Dashboard'
import ManageUsers from './pages/ManageUsers'
import RequestPending from './pages/RequestPending'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <IndexLogin />
  },
  {
    path: '/signup',
    element: <IndexRegister />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'manage-user',
        element: <ManageUsers />
      },
      {
        path: 'requests',
        element: <RequestPending />,
        children: [
          {
            path: ':id'
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
