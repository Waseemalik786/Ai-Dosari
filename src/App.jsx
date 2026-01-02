import React from "react";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ActivitiesExperiences from "./pages/ActivitiesExperiences";
import ContactPage from "./pages/ContactPage";
import WhatsApp from "./Components/common/Whatsapp";
import FooterSection from "./Components/common/FooterSection";
import NavbarSection from "./Components/common/NavbarSection";




const MainLayout = () => (
  <div>
    <NavbarSection/>
    <Outlet />
    <WhatsApp />
    <FooterSection />
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
