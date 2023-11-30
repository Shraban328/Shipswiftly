import PropTypes from "prop-types";
import DefaultButton from "../../../../Shared/DefaultButton";
import { Link } from "react-router-dom";
const ParcelTableRow = ({ parcel, idx }) => {
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{parcel.parcelType}</td>
      <td>{parcel.deliveryDate}</td>
      <td>{parcel.approximateDeliveryDate || "pending"}</td>
      <td>{parcel.deliveryMenId || "Not Assigned"}</td>
      <td>
        <p
          style={{
            color: `${
              (parcel?.status === "pending" && "#eab308") ||
              (parcel?.status === "cancel" && "#f43f5e") ||
              (parcel?.status === "on the way" && "#22c55e") ||
              (parcel?.status === "delivered" && "#3b82f6") ||
              (parcel?.status === "returned" && "#6b7280")
            }`,
          }}
        >
          {parcel.status == "cancel" ? "canceled" : parcel.status}
        </p>
      </td>
      <td>
        <Link to={`/dashboard/updateParcel/${parcel._id}`}>
          <DefaultButton text={"update"} bgColor={"#1874C1"} />
        </Link>
      </td>
      <td>
        <Link
          to={
            parcel.status !== "pending" &&
            `/dashboard/review/${parcel.deliveryMenId}`
          }
        >
          <DefaultButton text={"Review"} bgColor={"#ecb500"} />
        </Link>
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
