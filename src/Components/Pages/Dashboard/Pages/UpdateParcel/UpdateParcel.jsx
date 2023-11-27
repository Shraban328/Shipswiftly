import HeadingTitle from "../../../../Shared/HeadingTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
const UpdateParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [parcel, setParcel] = useState({});
  const [price, setPrice] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axiosSecure.get(`/parcels/updateParcel/${id}`).then((res) => {
      setParcel(res.data);
      setPrice("" + res.data.price);
    });
  }, [id, axiosSecure]);

  useEffect(() => {
    const defaultValues = {
      email: parcel.email,
      name: parcel.name,
      phoneNumber: parcel.phoneNumber,
      parcelType: parcel.parcelType,
      receiversName: parcel.receiversName,
      receiversPhoneNumber: parcel.receiversPhoneNumber,
      parcelWeight: parseFloat(parcel.parcelWeight),
      deliveryAddress: parcel.deliveryAddress,
      latitude: parseFloat(parcel.latitude),
      longitude: parseFloat(parcel.longitude),
      deliveryDate: parcel.deliveryDate,
      price: price,
      status: "pending",
    };
    reset({ ...defaultValues });
  }, [parcel, price, reset]);

  //   const [errorMessage, setErrorMessage] = useState(0);

  const handleParcelWeight = (weight) => {
    if (weight > 0 && weight <= 1) setPrice(50);
    else if (weight > 1 && weight <= 2) setPrice(100);
    else if (weight > 2) setPrice(200);
  };
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const parcelInfo = {
        id: id,
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
        price: parseFloat(price),
        status: "pending",
      };
      // console.log(parcelInfo);
      const res = await axiosSecure.put("/parcels", parcelInfo);
      console.log(res.data);
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
        <HeadingTitle title={"Update Parcel"} />
        {/* name and email */}
        <div className="flex items-center gap-6">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name")}
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
              {...register("email")}
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
              {...register("phoneNumber")}
              type="number"
              defaultValue={parcel?.phoneNumber}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Parcel Type</span>
            </label>
            <input
              {...register("parcelType", {
                pattern: /^[^0-9()]+$/,
              })}
              type="text"
              defaultValue={parcel?.parcelType}
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
              {...register("receiversName")}
              type="text"
              defaultValue={parcel?.receiversName}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Receiver Phone Number</span>
            </label>
            <input
              {...register("receiversPhoneNumber")}
              type="number"
              defaultValue={parcel?.receiversPhoneNumber}
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
              {...register("parcelWeight")}
              onChange={(e) => handleParcelWeight(e.target.value)}
              type="text"
              defaultValue={parcel?.parcelWeight}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Delivery Address</span>
            </label>
            <input
              {...register("deliveryAddress")}
              type="text"
              placeholder="delivery address"
              defaultValue={parcel?.deliveryAddress}
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
              {...register("latitude")}
              type="text"
              defaultValue={parcel?.latitude}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-1/2">
            <input
              {...register("longitude")}
              type="text"
              defaultValue={parcel?.longitude}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="gap-6">
          <label className="label">
            <span className="label-text">Requested Delivery Date:</span>
          </label>
          <input
            {...register("deliveryDate")}
            defaultValue={parcel?.deliveryDate}
            type="date"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h1 className="text-lg font-medium">Price is: {price}$</h1>
          <input
            type="submit"
            className="btn btn-primary bg-[#1874C1] hover:bg-[#1874C1] border-none text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateParcel;
