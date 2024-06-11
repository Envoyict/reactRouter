import React from "react";
import ReactDOM from "react-dom/client";
import { 
  createBrowserRouter,
   RouterProvider,
   } from "react-router-dom";
import Rootpage from "./page/rootPage";
import About from "./page/aboutUs";
import Contact from "./page/contactUs";
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootpage/>,
  },

  {path: "/about",
    element:<About/>
  },
  {path: "/contact",
    element:<Contact/>
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} /> 
  </React.StrictMode>
);
