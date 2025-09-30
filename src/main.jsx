import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import OverviewDashboard from './OverviewDashboard.jsx'
import OtherPages from './OtherPages.jsx'
import Help from './Help.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <OverviewDashboard /> },
      { path: 'tables', element: <OtherPages title="Tables" /> },
      { path: 'menu', element: <OtherPages title="Menu" /> },
      { path: 'inventory', element: <OtherPages title="Inventory" /> },
      { path: 'sales', element: <OtherPages title="Sales" /> },
      { path: 'reports', element: <OtherPages title="Reports" /> },
      { path: 'calendar', element: <OtherPages title="Calendar" /> },
      { path: 'help', element: <Help /> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

