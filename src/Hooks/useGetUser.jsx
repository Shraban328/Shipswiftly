import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useGetUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userDetails = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userDetails, refetch];
};

export default useGetUser;
