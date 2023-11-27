import ParcelTableHeading from "./parcelTableHeading";
import ParcelTableRow from "./ParcelTableRow";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import useParcels from "../../../../../Hooks/useParcels";
const MyParcels = () => {
  const [parcels] = useParcels();
  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <HeadingTitle title={"Your Parcels"} />
      <table className="table">
        {/* head */}
        <ParcelTableHeading />
        <tbody>
          {/* row  */}
          {parcels.map((parcel, idx) => (
            <ParcelTableRow key={parcel._id} idx={idx} parcel={parcel} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcels;
