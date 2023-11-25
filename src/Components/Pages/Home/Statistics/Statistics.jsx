import CountUp from "react-countup";
import { LuPackageCheck } from "react-icons/lu";
import { BiPackage } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
const Statistics = () => {
  return (
    <div className="grid grid-cols-3 max-w-screen-xl mx-auto my-8">
      <div className="card w-96 bg-base-100 my-16 rounded-none border-r-2">
        <div className="card-body flex-row gap-6">
          <BiPackage className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={5000} />
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
      <div className="card w-96 bg-base-100 my-16 rounded-none border-r-2">
        <div className="card-body flex-row gap-6">
          <LuPackageCheck className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={3790} />
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
      <div className="card w-96 bg-base-100 my-16 rounded-none ">
        <div className="card-body flex-row gap-6">
          <FaUsers className="text-[70px]" />
          <div>
            <h2 className="card-title text-[#1874C1] text-4xl">
              <CountUp duration={5} end={30000} />
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
