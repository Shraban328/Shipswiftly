import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMens = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMens = [], refetch } = useQuery({
    queryKey: ["delivery_mens"],
    queryFn: async () => {
      const res = await axiosSecure.get("/deliveryMens");
      return res.data;
    },
  });
  return [deliveryMens, refetch];
};

export default useDeliveryMens;
