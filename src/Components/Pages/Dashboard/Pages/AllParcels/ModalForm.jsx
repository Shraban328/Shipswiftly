import { useForm } from "react-hook-form";
import DefaultButton from "../../../../Shared/DefaultButton";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import PropTypes from "prop-types";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
const ModalForm = ({ deliveryMens, parcelId, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const parcelUpdateInfo = {
        parcelId: parcelId,
        deliveryMenId: data.deliveryMenId,
        updatedStatus: "on the way",
        approximateDeliveryDate: data.date,
      };
      console.log("sending this, ", parcelUpdateInfo);
      const res = await axiosSecure.patch(
        "/parcels/setDeliveryMen",
        parcelUpdateInfo
      );
      if (res.data.modifiedCount) {
        toast.success("Delivery Men Assigned!");
      } else {
        toast.error("Something went wrong!");
      }
      refetch();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border rounded-lg p-9">
      <HeadingTitle title={"Select DeliveryMen"} size="text-2xl" />
      <div>
        <label className="label">
          <span className="label-text">Select Delivery Men:</span>
        </label>
        <select
          defaultValue={""}
          className="select input-bordered w-full max-w-xs"
          {...register("deliveryMenId")}
        >
          <option disabled>Select DeliveryMen</option>
          {deliveryMens.map((deliveryMen) => (
            <option value={deliveryMen._id} key={deliveryMen._id}>
              {deliveryMen.name}
            </option>
          ))}
        </select>
      </div>
      <div className="gap-6">
        <label className="label">
          <span className="label-text">Approximate Delivery Date:</span>
        </label>
        <input
          {...register("date", { required: true })}
          type="date"
          className="input input-bordered w-full"
        />
        {errors.date?.type === "required" && (
          <p role="alert" className="text-rose-500">
            Date is empty
          </p>
        )}
      </div>
      <div className="mt-4">
        <DefaultButton text={"Assign"} bgColor={"#1874C1"} />
      </div>
    </form>
  );
};

export default ModalForm;
ModalForm.propTypes = {
  deliveryMens: PropTypes.array,
  parcelId: PropTypes.string,
  refetch: PropTypes.func,
};
