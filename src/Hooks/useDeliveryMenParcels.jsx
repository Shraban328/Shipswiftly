import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useGetUser from "./useGetUser";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMenParcels = () => {
  const [userDetails] = useGetUser();
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMenParcels = [], refetch } = useQuery({
    queryKey: ["deliveryMenParcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/deliveryList/${userDetails._id}`
      );
      return res.data;
    },
  });
  return [deliveryMenParcels];
};

export default useDeliveryMenParcels;
