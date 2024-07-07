import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Shop />,
        path: "/shop",
      },
      {
        element: <Blogs />,
        path: "/blogs",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
    ],
  },
]);
export default router;
