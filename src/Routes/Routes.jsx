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
import AdminHome from "../Components/Pages/Dashboard/Pages/AdminHome/AdminHome";
import AllParcels from "../Components/Pages/Dashboard/Pages/AllParcels/AllParcels";
import AllDeliveryMen from "../Components/Pages/Dashboard/Pages/AllDeliveryMen/AllDeliveryMen";
import AllUsers from "../Components/Pages/Dashboard/Pages/AllUsers/AllUsers";
import MyDeliveryList from "../Components/Pages/Dashboard/Pages/MyDeliveryList/MyDeliveryList";
import ReviewPage from "../Components/Pages/Dashboard/Pages/ReviewPage/ReviewPage";
import MyReviews from "../Components/Pages/Dashboard/Pages/MyReviews/MyReviews";

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
      // admin routes
      {
        path: "adminHome",
        element: (
          <PrivateRoute>
            <AdminHome />
          </PrivateRoute>
        ),
      },
      {
        path: "allParcels",
        element: (
          <PrivateRoute>
            <AllParcels />
          </PrivateRoute>
        ),
      },
      {
        path: "allDeliveryMen",
        element: (
          <PrivateRoute>
            <AllDeliveryMen />
          </PrivateRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      // user routes
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
      {
        path: "review/:id",
        element: (
          <PrivateRoute>
            <ReviewPage />
          </PrivateRoute>
        ),
      },
      // delivery men routes
      {
        path: "deliveryList",
        element: (
          <PrivateRoute>
            <MyDeliveryList />
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
