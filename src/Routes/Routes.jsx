import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login/Login";
import Signup from "../Components/Pages/SignUp/SignUp/Signup";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../Components/Pages/Dashboard/Pages/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import BookParcel from "../Components/Pages/Dashboard/Pages/BookParcel/BookParcel";
import MyParcels from "../Components/Pages/Dashboard/Pages/MyParcels/MyParcels";
import UpdateParcel from "../Components/Pages/Dashboard/Pages/UpdateParcel/UpdateParcel";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "bookParcel",
        element: (
          <PrivateRoute>
            <BookParcel />
          </PrivateRoute>
        ),
      },
      {
        path: "myParcels",
        element: (
          <PrivateRoute>
            <MyParcels />
          </PrivateRoute>
        ),
      },
      {
        path: "updateParcel/:id",
        element: (
          <PrivateRoute>
            <UpdateParcel />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
