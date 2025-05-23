import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Project from "../component/Project/Project";
import Home from "../component/Home/Home";
import Skils from "../component/Skils/Skils";
import About from "../component/About/About";
import Services from "../component/Services/Services";
import Contact from "../component/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skill",
        element: <Skils />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
