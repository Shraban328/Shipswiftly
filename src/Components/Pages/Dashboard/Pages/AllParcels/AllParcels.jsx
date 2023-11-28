import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import AllParcelsTableHeading from "./AllParcelsTableHeading";
import AllParcelsTableRow from "./AllParcelsTableRow";

const AllParcels = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/parcels/allParcels");
      return res.data;
    },
  });
  return (
    <div className="ml-9 mt-9">
      <h1>total parcels: {parcels.length}</h1>
      <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
        <HeadingTitle title={"Your Parcels"} />
        <table className="table">
          {/* head */}
          <AllParcelsTableHeading />
          <tbody>
            {/* row  */}
            {parcels.map((parcel, idx) => (
              <AllParcelsTableRow key={parcel._id} idx={idx} parcel={parcel} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
