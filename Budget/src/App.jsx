import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard, { dashboardLoader } from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/dash",
    element:<Dashboard/>,
    loader:dashboardLoader
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
