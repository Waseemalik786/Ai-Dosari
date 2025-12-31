import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './Pages/Home';
import WhatSapp from './components/common/Whatsapp';
import Contact from './Pages/Contact';



const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <Navbar />
    <Outlet />
    <WhatSapp />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);


const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App


