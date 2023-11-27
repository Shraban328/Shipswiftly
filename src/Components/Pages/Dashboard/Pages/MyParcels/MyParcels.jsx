import ParcelTableHeading from "./parcelTableHeading";
import ParcelTableRow from "./ParcelTableRow";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import useParcels from "../../../../../Hooks/useParcels";
import { useEffect, useState } from "react";
const MyParcels = () => {
  // need to ask question on maximum update dept exceeded error
  const [parcels] = useParcels();
  const [filteredParcels, setFilteredParcels] = useState(parcels);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    if (filterText) {
      const remainingParcels = parcels.filter(
        (parcel) => parcel.status === filterText
      );
      setFilteredParcels(remainingParcels);
    } else {
      setFilteredParcels(parcels);
    }
  }, [parcels, filterText]);

  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <div className="flex items-center justify-evenly mt-5">
        <HeadingTitle title={"Your Parcels"} />
        <div className="form-control w-full max-w-xs">
          <select
            defaultValue={""}
            className="select select-bordered focus:outline-1 focus:outline-offset-1"
            onClick={(e) => setFilterText(e.target.value)}
          >
            <option disabled>Pick one</option>
            <option value={""}>All</option>
            <option value={"pending"}>Pending</option>
            <option value={"on the way"}>On The Way</option>
            <option value={"delivered"}>Delivered</option>
            <option value={"returned"}>Returned</option>
            <option value={"cancel"}>Cancelled</option>
          </select>
        </div>
      </div>
      <table className="table">
        {/* head */}
        <ParcelTableHeading />
        <tbody>
          {/* row  */}
          {filteredParcels.map((parcel, idx) => (
            <ParcelTableRow key={parcel._id} idx={idx} parcel={parcel} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
