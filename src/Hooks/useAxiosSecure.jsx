import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      console.log("found an error while request");
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    function (response) {
      console.log("token verified");
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("found an error in response", status);
      if (status === 401 || status === 403) {
        await userLogout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
