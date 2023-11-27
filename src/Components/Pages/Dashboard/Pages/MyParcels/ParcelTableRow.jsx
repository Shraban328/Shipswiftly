import PropTypes from "prop-types";
import DefaultButton from "../../../../Shared/DefaultButton";
import { Link } from "react-router-dom";
const ParcelTableRow = ({ parcel, idx }) => {
  // <th>Parcel Type</th>
  // <th>Requested Delivery</th>
  // <th>Approximate Delivery</th>
  // <th>Delivery Men ID</th>
  // <th>Booking Status</th>
  // <th>Update</th>
  // <th>Review</th>
  // <th>Pay</th>
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{parcel.parcelType}</td>
      <td>{parcel.deliveryDate}</td>
      <td>{parcel.approximateDeiveryDate || "pending"}</td>
      <td>{parcel.deliveryManId || "pending"}</td>
      <td>{parcel.status}</td>
      <td>
        <Link to={`/dashboard/updateParcel/${parcel._id}`}>
          <DefaultButton text={"update"} bgColor={"#1874C1"} />
        </Link>
      </td>
      <td>
        <DefaultButton text={"Review"} bgColor={"#ecb500"} />
      </td>
      <td>
        <DefaultButton text={"Pay"} bgColor={"#d83a00"} />
      </td>
    </tr>
  );
};

export default ParcelTableRow;

ParcelTableRow.propTypes = {
  parcel: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
