import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root.jsx'
import ErrorPage from './ErrorPage.jsx'
import Contact from './routes/Contact.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path: "contacts/:contactId",
        element : <Contact/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
