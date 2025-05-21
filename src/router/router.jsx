import { createBrowserRouter } from "react-router-dom";
import Benefits from "../pages/Benefits";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import TechnicalInfo from "../pages/TechnicalInfo";
import MainRouter from "./MainRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/benefits",
        element: <Benefits />
      },
      {
        path: "/products",
        element: <OurProducts />
      },
      {
        path: "/support",
        element: <TechnicalInfo />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
    ]
  },
  {
    path: '*',
    // element: <Error />
  },
]);

export default router;