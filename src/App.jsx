import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ActivitiesExperiences from "./Pages/Activities&Experiences";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatSapp from './components/common/Whatsapp';
import ActivitiesExperiences from './Pages/Activities&Experiences';
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
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },

      // { path: "/", element: <Home /> },
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
