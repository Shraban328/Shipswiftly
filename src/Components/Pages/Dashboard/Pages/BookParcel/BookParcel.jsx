import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import { useState } from "react";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import moment from "moment";
import toast from "react-hot-toast";

const BookParcel = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [price, setPrice] = useState("0");
  //   const [errorMessage, setErrorMessage] = useState(0);

  const handleParcelWeight = (weight) => {
    if (weight > 0 && weight <= 1) setPrice(50);
    else if (weight > 1 && weight <= 2) setPrice(100);
    else if (weight > 2) setPrice(200);
  };
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const parcelInfo = {
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        parcelType: data.parcelType,
        receiversName: data.receiversName,
        receiversPhoneNumber: data.receiversPhoneNumber,
        parcelWeight: parseFloat(data.parcelWeight),
        deliveryAddress: data.deliveryAddress,
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        deliveryDate: data.deliveryDate,
        bookingDate: moment().format("YYYY-MM-DD"),
        price: price,
        status: "pending",
      };
      const res = await axiosPublic.post("/parcels", parcelInfo);
      console.log(res.data);
      toast.success("Parcel Submitted Successfully!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="m-9">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] rounded-lg p-9"
      >
        <HeadingTitle title={"Book Your Parcel"} />
        {/* name and email */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={user.displayName}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="text"
              defaultValue={user.email}
              className="input input-bordered w-full"
              readOnly
            />
          </div>
        </div>
        {/* phone number & parcel type */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              {...register("phoneNumber", { required: true })}
              type="number"
              placeholder="phone number"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Parcel Type</span>
            </label>
            <input
              {...register("parcelType", {
                required: true,
                pattern: /^[^0-9()]+$/,
              })}
              type="text"
              placeholder="parcel type"
              className="input input-bordered w-full"
            />
            {errors.parcelType?.type === "pattern" && (
              <p role="alert" className="text-rose-500">
                Number Input is not accepted
              </p>
            )}
          </div>
        </div>
        {/* receivers name & receivers phone number */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Receivers Name: </span>
            </label>
            <input
              {...register("receiversName", { required: true })}
              type="text"
              placeholder="receiver name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Receiver Phone Number</span>
            </label>
            <input
              {...register("receiversPhoneNumber", { required: true })}
              type="number"
              placeholder="receiver phone number"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* parcel weight & parcel delivery address */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Parcel weight: </span>
            </label>
            <input
              {...register("parcelWeight", {
                required: true,
              })}
              onChange={(e) => handleParcelWeight(e.target.value)}
              type="text"
              placeholder="parcel weight(kg)"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Delivery Address</span>
            </label>
            <input
              {...register("deliveryAddress", { required: true })}
              type="text"
              placeholder="delivery address"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Delivery Address Latitude & Delivery Address Longitude */}
        <label className="label">
          <span className="label-text">
            Delivery Address Latitude and Longitude
          </span>
        </label>
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <input
              {...register("latitude", { required: true })}
              type="text"
              placeholder="latitude"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <input
              {...register("longitude", { required: true })}
              type="text"
              placeholder="longitude"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="gap-6">
          <label className="label">
            <span className="label-text">Requested Delivery Date:</span>
          </label>
          <input
            {...register("deliveryDate", { required: true })}
            type="date"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h1 className="text-lg font-medium">Price is: {price}$</h1>
          <button className="btn btn-primary bg-[#1874C1] hover:bg-[#1874C1] border-none text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookParcel;
