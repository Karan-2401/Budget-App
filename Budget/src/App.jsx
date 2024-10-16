import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Mainboard, {MainLoader}from './layout/Main';
import { logout } from './action/Logout';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainboard/>,
    loader:MainLoader,
    children:[
      {
        path:"/",
        element:<Dashboard/>,
        loader:dashboardLoader,
      },
      {
        path:"/logout",
        action:logout
      }
    ]
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer/>
    </>
  )
}

export default App
