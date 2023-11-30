import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import SignupForm from "./SignupForm";
import { updateProfile } from "firebase/auth";
import auth from "../../../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import SocialLogin from "../../../Shared/socialLogin";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await createUser(data.email, data.password);
      console.log(res.user);
      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: data.image,
      });
      const userInfo = {
        email: data.email.toLowerCase(),
        name: data.name,
        image: data.image,
        type: data.type,
      };
      console.log("new deliverymen info,", userInfo);
      const axiosRes = await axiosPublic.post("/users", userInfo);
      console.log(axiosRes.data);

      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Helmet>
        <title>ShipSwiftly | signup </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row h-full w-full ">
          <div className="card w-full  max-w-sm shadow-2xl bg-base-100">
            <div className="flex justify-center mt-4">
              <h1 className="text-4xl font-bold text-[#1874C1]">SignUp</h1>
            </div>
            <SignupForm
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
            <div className="text-center text-yellow-600">
              <h4>
                Already Have an account?{" "}
                <Link className="font-medium" to={"/login"}>
                  go to Login
                </Link>
              </h4>
            </div>
            <div className="divider">OR</div>
            <div>
              <SocialLogin navigate={navigate} from={from} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
