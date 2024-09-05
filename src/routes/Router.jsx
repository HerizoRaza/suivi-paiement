import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));

/***** Pages ****/
const Starter = lazy(() => import("../views/Starter.jsx"));
const Register = lazy(() => import("../views/login/register.jsx"))
const Login = lazy(() => import("../views/login/login.jsx"))

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
    {
      children: [
        { path: "/register", exact: true, element: <Register /> },
        { path: "/login", exact: true, element: <Login/> },
      ],
    }
  ];

  export default ThemeRoutes;