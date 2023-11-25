import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import LoginForm from "./LoginForm";
import useAuth from "../../../../Hooks/useAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userSignIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    console.log(data);
    // try {
    //   const result = await userSignIn(data.email, data.password);
    //   navigate(from, { replace: true });
    //   console.log(result);
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <>
      <Helmet>
        <title>ShipSwiftly | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row h-full ">
          <div className="card w-full  max-w-sm shadow-2xl bg-base-100">
            {" "}
            <LoginForm
              onSubmit={onSubmit}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
            />
            <div className="text-center text-yellow-600">
              <h4>
                New here?{" "}
                <Link className="font-medium" to={"/signup"}>
                  Create a New Account
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
