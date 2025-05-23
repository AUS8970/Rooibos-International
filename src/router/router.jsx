import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import OurProducts from "../pages/OurProducts";
import MainRouter from "./MainRouter";
import Inspiration from "../components/Inspiration";
import Recipes from "../components/Recipes";

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
        path: "/supplay",
        element: <OurProducts />
      },
      {
        path: "/inspiration",
        element: <Inspiration />
      },
      {
        path: "/recipes",
        element: <Recipes />
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