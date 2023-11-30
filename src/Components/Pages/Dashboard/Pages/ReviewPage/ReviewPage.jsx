import { useForm } from "react-hook-form";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import { useEffect } from "react";
import useAuth from "../../../../../Hooks/useAuth";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ReviewPage = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const defaultValues = {
      name: user?.displayName,
      image: user?.photoURL,
    };
    reset({ ...defaultValues });
  }, [user, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const userReviewInfo = {
        name: data.name,
        image: data.image,
        rating: parseFloat(data.rating),
        feedback: data.feedback,
        date: moment().format("YYYY-MM-DD"),
        deliveryMenId: id,
      };
      console.log(userReviewInfo);
      const res = axiosSecure.post("/parcels/parcelReview", userReviewInfo);
      console.log(res.data);
      toast.success("Thank You For Your Review");
      navigate("/dashboard/myParcels");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="ml-9 mt-9">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] rounded-lg p-9 w-1/2"
      >
        <HeadingTitle title={"Review"} />
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            {...register("image")}
            type="text"
            defaultValue={user?.photoURL}
            className="input input-bordered w-full"
            readOnly
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Rate</span>
          </label>
          <input
            {...register("rating", { required: true, max: 5 })}
            type="number"
            placeholder="rate out of 5"
            className="input input-bordered w-full"
          />
          {errors.rating?.type === "max" && (
            <p role="alert" className="text-rose-500">
              Please Rate Out Of 5
            </p>
          )}
        </div>
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Feedback</span>
            </div>
            <textarea
              {...register("feedback", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="We appreciate your feedback"
            ></textarea>
          </label>
        </div>
        <button className="btn btn-primary bg-[#1874C1] hover:bg-[#1874C1] border-none text-white mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
