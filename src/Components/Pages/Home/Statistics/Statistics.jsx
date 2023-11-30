import CountUp from "react-countup";
import { LuPackageCheck } from "react-icons/lu";
import { BiPackage } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const Statistics = () => {
  const axiosSecure = useAxiosSecure();
  const [parcelBooked, setParcelBooked] = useState(0);
  const [parcelDelivered, setParcelDelivered] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axiosSecure.get("/parcels/allParcels").then((res) => {
      const parcelBooked = res.data.filter(
        (parcel) => parcel.status !== "cancel"
      );
      setParcelBooked(parcelBooked.length);
      const parcelDelivered = res.data.filter(
        (parcel) => parcel.status === "delivered"
      );
      setParcelDelivered(parcelDelivered.length);
    });

    axiosSecure.get("/users/allUsers").then((res) => {
      setTotalUsers(res.data.length);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto my-8">
      <div className="card max-w-[1280px]  bg-base-100 my-16 rounded-none border-r-2">
        <div className="card-body flex-row gap-6">
          <BiPackage className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={parcelBooked} />
            </h2>
            <progress
              className="progress progress-warning w-32 h-1"
              value="30"
              max="100"
            ></progress>
            <p className="text-sm text-gray-500">Parcel Booked</p>
          </div>
        </div>
      </div>
      <div className="card max-w-[1280px]  bg-base-100 my-16 rounded-none border-r-2">
        <div className="card-body flex-row gap-6">
          <LuPackageCheck className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={parcelDelivered} />
            </h2>
            <progress
              className="progress progress-warning w-32 h-1"
              value="30"
              max="100"
            ></progress>
            <p className="text-sm text-gray-500">Parcel Delivered</p>
          </div>
        </div>
      </div>
      <div className="card max-w-[1280px]  bg-base-100 my-16 rounded-none ">
        <div className="card-body flex-row gap-6">
          <FaUsers className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={totalUsers} />
            </h2>
            <progress
              className="progress progress-warning w-32 h-1"
              value="30"
              max="100"
            ></progress>
            <p className="text-sm text-gray-500">Our Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
