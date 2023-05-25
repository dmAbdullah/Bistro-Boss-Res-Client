import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import { router } from './Components/Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <HelmetProvider>
   <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} />
    </div>
   </HelmetProvider>
   </AuthProvider>
  </React.StrictMode>,
)
