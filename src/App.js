import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Services,
  History,
  Location,
} from "./pages";
import Whoops404 from "./Whoops404";

function App() {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "about",
      element: <About />,
      children: [
        {
          path: "services",
          element: <Services />,
        },
        { path: "history", element: <History /> },
        {
          path: "location",
          element: <Location />,
        },
      ],
    },
    { path: "events", element: <Events /> },
    { path: "products", element: <Products /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Whoops404 /> },
    {
      path: "services",
      redirectTo: "about/services",
    },
  ]);
  return element;
}

export default App;
