import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../Layout/MainLayout';
import Homepage from "../Pages/Homepage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          index: true,
          element: <Homepage></Homepage>,
        },
      ]
    },
  ]);