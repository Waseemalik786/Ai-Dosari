import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './Components/common/Navbar';
import Footer from './Components/common/Footer';
import WhatSapp from './Components/common/Whatsapp';
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ActivitiesExperiences from "./pages/ActivitiesExperiences";
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
      { path: '/about', element: <AboutPage /> },
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
