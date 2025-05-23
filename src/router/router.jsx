import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import WhatWeSupplay from "../pages/WhatWeSupplay";
import MainRouter from "./MainRouter";
import Inspiration from "../pages/Inspiration";
import Recipes from "../pages/Recipes";
import Error from "../pages/Error";

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
        element: <WhatWeSupplay />
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
    element: <Error />
  },
]);

export default router;