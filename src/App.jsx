import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './Pages/Home';
import WhatSapp from './components/common/Whatsapp';
import SignUp from './components/common/SignUp';
import Login from './components/common/Login';



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
      {path:"/signup", element:<SignUp/> } ,
      {path:"/login" , element:<Login/>} 
    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);


const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App


