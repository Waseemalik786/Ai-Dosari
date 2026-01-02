import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ActivitiesExperiences from "./pages/ActivitiesExperiences";
import ContactPage from "./pages/ContactPage";
import WhatsApp from "./components/common/WhatsApp";
import FooterSection from "./components/common/FooterSection";
import NavbarSection from "./components/common/NavbarSection";
import MainHome from "./pages/MainHome";
// import PageNotFound from "./pages/PageNotFound";
import Gallery from './Pages/Gallery'; // Import Gallery Page
import Login from "./components/common/Login";
import SignUp from "./components/common/SignUp";


const MainLayout = () => (
  <div>
    <NavbarSection />
    <Outlet />
    <WhatsApp />
    <FooterSection />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [

      { path: '/', element: <MainHome /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/activities', element: <ActivitiesExperiences /> },
      { path: '/contact', element: <ContactPage /> },
      { path: "/gallery", element: <Gallery /> }, 
      { path: "/login", element: <Login/> }, 
      { path: "/signup", element: <SignUp /> }, 

    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;