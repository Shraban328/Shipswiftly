import { useForm } from "react-hook-form";
import axios from "axios";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useGetUser from "../../../../../Hooks/useGetUser";
import toast from "react-hot-toast";
const MyProfile = () => {
  const [userDetails, refetch] = useGetUser();
  const { register, handleSubmit } = useForm();
  const img_upload_key = import.meta.env.VITE_IMG_UPLOAD_KEY;
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data.image[0]);
    try {
      toast("Uploading!");
      let image = new FormData();
      image.set("key", img_upload_key);
      image.append("image", data.image[0]);
      const res = await axios.post("https://api.imgbb.com/1/upload", image);

      const updatedImage = { newImage: res.data.data.display_url };
      const imgRes = await axiosSecure.patch(
        `/users/${userDetails.email}`,
        updatedImage
      );
      console.log("image response: ", imgRes.data);
      refetch();
      toast.success("Successfully Updated Profile Image!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="ml-9 mt-9 h-[70vh] w-full border rounded-lg">
      <div className="h-1/3 w-full bg-[#1874C1] border-b-[5px] border-[#1890c1] relative">
        <div className="absolute -bottom-16 left-14 flex items-center gap-2">
          <img
            className="w-40 h-40  border-[4px] border-white rounded-full"
            src={userDetails?.image}
            alt=""
          />
          <div className="mt-6 space-y-2">
            <h1 className="text-3xl font-bold text-white">
              {userDetails?.name}
            </h1>
            <h1 className=" font-bold">{userDetails?.email}</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" absolute right-2 -bottom-16 flex gap-4"
        >
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary bg-[#1874C1] hover:bg-[#1874C1] border-none">
            Update Profile Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
