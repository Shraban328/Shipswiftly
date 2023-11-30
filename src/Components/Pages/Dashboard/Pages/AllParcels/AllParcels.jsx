import HeadingTitle from "../../../../Shared/HeadingTitle";
import AllParcelsTableHeading from "./AllParcelsTableHeading";
import AllParcelsTableRow from "./AllParcelsTableRow";
import useDeliveryMens from "../../../../../Hooks/useDeliveryMens";
import useAllParcels from "../../../../../Hooks/useAllParcels";

const AllParcels = () => {
  const [deliveryMens, refetch] = useDeliveryMens();
  const [parcels] = useAllParcels();
  return (
    <div className="ml-9 mt-9">
      <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
        <HeadingTitle title={"All Parcels"} />
        <table className="table">
          {/* head */}
          <AllParcelsTableHeading />
          <tbody>
            {/* row  */}
            {parcels.map((parcel, idx) => (
              <AllParcelsTableRow
                key={parcel._id}
                idx={idx}
                parcel={parcel}
                deliveryMens={deliveryMens}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllParcels;
