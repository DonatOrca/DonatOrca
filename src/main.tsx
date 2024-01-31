import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard.tsx'
import Announcement from './components/pages/Announcement.tsx'
import Officers from './components/pages/Officers.tsx'
import History from './components/pages/History.tsx'

const router = createBrowserRouter([{

  path: "/DonatOrca/",
  element: <App/>,
  children: [
    {
      path: "/DonatOrca/",
      element: <Dashboard/>
    },
    {
      path: "/DonatOrca/announcement",
      element: <Announcement/>
    },
    {
      path: "/DonatOrca/officers",
      element: <Officers/>
    },
    {
      path: "/DonatOrca/history",
      element: <History/>
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
