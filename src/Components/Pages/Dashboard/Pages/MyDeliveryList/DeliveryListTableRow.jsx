import PropTypes from "prop-types";
import DefaultButton from "../../../../Shared/DefaultButton";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
const DeliveryListTableRow = ({ parcel, idx }) => {
  const axiosSecure = useAxiosSecure();
  // <th>Sender Name</th>
  // <th>Receivers Name</th>
  // <th>PhoneNumber</th>
  // <th>Requested Delivery Date</th>
  // <th>Approximate Delivery Date</th>
  // <th>Receivers Phone Number</th>
  // <th>Action</th>
  // <th>Action</th>
  const handleCancelDelivery = async () => {
    console.log("clicked");
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cancel Delivery",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const updatedStatus = {
            id: parcel._id,
            status: "cancel",
          };
          const res = await axiosSecure.patch("/parcels", updatedStatus);
          console.log(res.data);
          Swal.fire(
            "Canceled!",
            "Parcel Delivery Has Been SuccessFully Canceled.",
            "success"
          );
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{parcel?.name}</td>
      <td>{parcel.receiversName}</td>
      <td>{parcel.deliveryDate || "N/A"}</td>
      <td>{parcel.approximateDeliveryDate || "pending"}</td>
      <td>{parcel.receiversPhoneNumber || "N/A"}</td>
      <td>
        <Link to={`/dashboard/updateParcel/${parcel._id}`}>
          <DefaultButton text={"Deliver"} bgColor={"#1874C1"} />
        </Link>
      </td>
      {parcel?.status === "cancel" ? (
        <td onClick={handleCancelDelivery} className="cursor-pointer">
          <button className="btn btn-error text-base-100" disabled>
            Canceled
          </button>
        </td>
      ) : (
        <td onClick={handleCancelDelivery}>
          <DefaultButton text={"Cancel"} bgColor={"#ecb500"} />
        </td>
      )}
    </tr>
  );
};

export default DeliveryListTableRow;
DeliveryListTableRow.propTypes = {
  parcel: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
