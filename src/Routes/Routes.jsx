import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login/Login";
import Signup from "../Components/Pages/SignUp/SignUp/Signup";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default Routes;
