import { useQuery } from "@tanstack/react-query";
import useDeliveryMens from "../../../../../Hooks/useDeliveryMens";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import AllDeliveryMenTableHeading from "./AllDeliveryMenTableHeading";
import DeliveryMenRow from "./DeliveryMenRow";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const AllDeliveryMen = () => {
  const [deliveryMens] = useDeliveryMens();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews");
      console.log(res.data.length);
      return res.data;
    },
  });
  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <HeadingTitle title={"DeliveryMens"} />
      <table className="table">
        {/* head */}
        <AllDeliveryMenTableHeading />
        <tbody>
          {/* row  */}
          {deliveryMens.map((deliveryMen, idx) => (
            <DeliveryMenRow
              key={deliveryMen._id}
              idx={idx}
              deliveryMen={deliveryMen}
              reviews={reviews}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDeliveryMen;
