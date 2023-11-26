import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import { useState } from "react";

const BookParcel = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [price, setPrice] = useState("0");
  const [errorMessage, setErrorMessage] = useState("");
  const handleParcelWeight = (weight) => {
    const parcelWeight = parseFloat(weight);
    if (parcelWeight > 0 && parcelWeight <= 1) setPrice("50");
    else if (parcelWeight > 1 && parcelWeight <= 2) setPrice("100");
    else if (parcelWeight > 2) setPrice("200");
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="m-9">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] rounded-lg p-9"
      >
        <div className="flex justify-center my-4">
          <h1 className="text-4xl font-bold text-[#1874C1]">
            Book Your Parcel
          </h1>
        </div>
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
              type="text"
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
          </div>
        </div>
        {/* receivers name & receivers phone number */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Receivers Name: </span>
            </label>
            <input
              {...register("receiverName", { required: true })}
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
              {...register("receiverPhoneNumber", { required: true })}
              type="text"
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
              {...register("parcelWeight", { required: true })}
              onChange={(e) => handleParcelWeight(e.target.value)}
              type="text"
              placeholder="parcel weight"
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
