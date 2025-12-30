import React from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import Home from './Components/Pages/Home';



const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-[1536px]">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
     
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


