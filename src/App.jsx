import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatSapp from './components/common/Whatsapp';
import ActivitiesExperiences from './pages/ActivitiesExperiences';
import Home from './pages/Home';



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
