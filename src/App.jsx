import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatSapp from './components/common/Whatsapp';
import Home from "./Pages/Home";
import About from "./pages/About";
import ActivitiesExperiences from "./Pages/ActivitiesExperiences";
import ContactPage from "./pages/ContactPage";




const MainLayout = () => (
  <div>
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

      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/activities', element: <ActivitiesExperiences /> },
      { path: '/contact', element: <ContactPage /> },



    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
