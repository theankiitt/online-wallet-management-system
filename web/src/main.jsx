import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import { UserRegister } from './components/UserRegister.jsx';
import { LandingPage } from './components/LandingPage.jsx';
import { UserLogin } from './components/userlogin.jsx';
// Supports weights 100-900
import '@fontsource-variable/dm-sans/wght.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/> ,
  },
   {
    path: "/login",
    element: <UserLogin/> ,
  },
  {
    path: "/register",
    element: <UserRegister/> ,
  },

]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     
    
   
    
  </StrictMode>,
)
