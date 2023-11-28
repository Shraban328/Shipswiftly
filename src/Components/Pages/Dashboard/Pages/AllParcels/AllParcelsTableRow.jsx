import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DefaultButton from "../../../../Shared/DefaultButton";
const AllParcelsTableRow = ({ parcel, idx }) => {
  // <th></th>
  // <th>User Name</th>
  // <th>User Phone Number</th>
  // <th>Booking Date</th>
  // <th>Requested Delivery Date</th>
  // <th>Cost</th>
  // <th>Status</th>
  // <th>action</th>
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{parcel.name}</td>
      <td>{parcel.phoneNumber}</td>
      <td>{parcel.bookingDate || "pending"}</td>
      <td>{parcel.deliveryDate || "pending"}</td>
      <td>${parcel.price || "pending"}</td>
      <td>{parcel.status}</td>
      <td>
        <Link to={`/dashboard/updateParcel/${parcel._id}`}>
          <DefaultButton text={"update"} bgColor={"#1874C1"} />
        </Link>
      </td>
    </tr>
  );
};

export default AllParcelsTableRow;
AllParcelsTableRow.propTypes = {
  parcel: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
