import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatSapp from './components/common/Whatsapp';
import ActivitiesExperiences from './Pages/ActivitiesExperiences';
// import Home from './Pages/Home';



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
      // { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/activities", element: <ActivitiesExperiences /> },

      { path: "/contact", element: <Contact /> },
    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
