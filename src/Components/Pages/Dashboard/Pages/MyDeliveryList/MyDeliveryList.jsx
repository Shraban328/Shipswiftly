import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import DeliveryListTableHeading from "./DeliveryListTableHeading";
import DeliveryListTableRow from "./DeliveryListTableRow";
import useGetUser from "../../../../../Hooks/useGetUser";
import { useEffect, useState } from "react";
import useAllParcels from "../../../../../Hooks/useAllParcels";

const MyDeliveryList = () => {
  const [userDetails] = useGetUser();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/deliveryList/${userDetails._id}`);
      return res.data;
    },
  });
  console.log(parcels?.length);
  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <div className="flex items-center justify-evenly mt-5">
        <HeadingTitle title={"Delivery List"} />
      </div>
      <table className="table">
        {/* head */}
        <DeliveryListTableHeading />
        <tbody>
          {/* row  */}
          {parcels?.map((parcel, idx) => (
            <DeliveryListTableRow key={parcel._id} idx={idx} parcel={parcel} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyDeliveryList;
