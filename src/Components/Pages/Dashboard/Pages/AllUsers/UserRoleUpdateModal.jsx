import toast from "react-hot-toast";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import DefaultButton from "../../../../Shared/DefaultButton";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
const UserRoleUpdateModal = ({ userId, handleClose, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleMakeDeliveryMen = async () => {
    handleClose();
    try {
      console.log(userId);
      Swal.fire({
        title: "Are you sure?",
        text: "This User Will Be Changed To DeliveryMen!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(
            `/userType/makeDeliveryMen/${userId}`
          );
          console.log(res.data);
          refetch();
          toast.success("SuccessFully Converted To Delivery Men");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  const handleMakeAdmin = async () => {
    handleClose();
    try {
      console.log(userId);
      Swal.fire({
        title: "Are you sure?",
        text: "This User Will Be Changed To Admin!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.patch(`/userType/makeAdmin/${userId}`);
          console.log(res.data);
          refetch();
          toast.success("SuccessFully Converted To Admin");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="border rounded-lg p-9 bg-base-300">
      <HeadingTitle title={"Update User Role:"} size="text-2xl" />
      <div className="flex items-center gap-6">
        <p onClick={handleMakeDeliveryMen}>
          <DefaultButton text={"Make Delivery Men"} bgColor={"#1874C1"} />
        </p>
        <p onClick={handleMakeAdmin}>
          <DefaultButton text={"Make Admin"} bgColor={"#1874C1"} />
        </p>
      </div>
    </div>
  );
};

export default UserRoleUpdateModal;
UserRoleUpdateModal.propTypes = {
  userId: PropTypes.string,
  handleClose: PropTypes.func,
  refetch: PropTypes.func,
};
