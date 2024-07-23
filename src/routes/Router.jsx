import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.jsx"));
const Login = lazy(() => import("../views/Starter.jsx"));

/*****Routes******/
const ThemeRoutes = [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", element: <Navigate to="/starter" /> },
        { path: "/starter", exact: true, element: <Starter /> },
      ],
    },
  ];

  export default ThemeRoutes;