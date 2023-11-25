import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import SignupForm from "./SignupForm";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <Helmet>
        <title>ShipSwiftly | signup</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row h-full ">
          <div className="card w-full  max-w-sm shadow-2xl bg-base-100">
            {" "}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
