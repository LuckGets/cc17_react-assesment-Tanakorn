import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from '../Page/LoginPage';
import HomePage from '../Page/HomePage';

const router = createBrowserRouter([
  {path: '/', element: <LoginPage/>},
  {path: '/home', element: <HomePage/>}
])

export default function Router() {
  return (
    <RouterProvider router={router}/>
  )
}
