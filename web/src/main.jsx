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
import '@fontsource-variable/geist/wght.css';

import { Layout } from './components/Layout.jsx';
import { SendMoney } from './components/SendMoney.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { AddMoney } from './components/AddMoney.jsx';
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
  {
    path: "/dashboard",
    element: <Layout/> ,
    children:[
       {
        index:true,
        element: <Dashboard/>
      },
       {
        path: "add-money",
        element: <AddMoney/>
      },
      {
        path: "send-money",
        element: <SendMoney/>
      }

    ]
  },


]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     
    
   
    
  </StrictMode>,
)
