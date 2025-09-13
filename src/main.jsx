import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import BlogPage from '@/components/pages/blogpage.jsx'
import ErrorPage from "@/components/pages/errorpage.jsx"

import getProjectById from '@/utils/projectApi.jsx'

import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "blog/projects/:blogId",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
