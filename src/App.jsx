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
import Contact from "./Pages/Contact";
import ActivitiesExperiences from './Pages/ActivitiesExperiences';
import Gallery from './Pages/Gallery'; // Import Gallery Page

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



      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/activities", element: <ActivitiesExperiences /> },
      { path: "/gallery", element: <Gallery /> }, // Added Gallery Route
      { path: "/contact", element: <Contact /> },
    ],
  },
  // { path: "*", element: <PageNotFound /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;