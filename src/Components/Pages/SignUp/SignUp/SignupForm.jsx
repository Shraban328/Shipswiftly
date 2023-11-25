import { useState } from "react";
import PropTypes from "prop-types";
import SignUpTextInput from "./signupTextInput";
const SignupForm = ({ onSubmit, register, handleSubmit, errors }) => {
  const [errorCheck, setErrorCheck] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      {/* title, type, placeholder, register */}
      <SignUpTextInput
        title="Your Name"
        type="text"
        placeholder="name"
        register={register}
        registerName="name"
      />
      {errorCheck && errors.name && (
        <span className="text-rose-600">Name is required</span>
      )}
      <SignUpTextInput
        title="Photo Url"
        type="text"
        placeholder="image"
        register={register}
        registerName="image"
      />
      {errorCheck && errors.name && (
        <span className="text-rose-600">Name is required</span>
      )}

      {/* select field */}
      <div className="form-control ">
        <label>register as</label>
        <select
          defaultValue={"user"}
          {...register("gender")}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="user">customer</option>
          <option value="deliverymen">delivery men</option>
        </select>
      </div>

      <SignUpTextInput
        title="Email"
        type="Email"
        placeholder="email"
        register={register}
        registerName="email"
      />
      {errorCheck && errors.email && (
        <span className="text-rose-600">Email is required</span>
      )}
      <SignUpTextInput
        title="Password"
        type="password"
        placeholder="password"
        register={register}
        registerName="password"
      />
      {errorCheck && errors.password?.type === "required" && (
        <span className="text-rose-600">Password is required</span>
      )}
      {errorCheck && errors.password?.type === "pattern" && (
        <span className="text-rose-600">
          Password must include least one Uppercase letter and one special
          character
        </span>
      )}
      <div className="form-control md:mt-3 lg:mt-6">
        <input
          onClick={() => setErrorCheck(true)}
          className="btn btn-primary bg-[#1874C1] hover:bg-[#1874C1] border-none text-white"
          type="submit"
          value="signup"
        />
      </div>
    </form>
  );
};

export default SignupForm;

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  handleSubmit: PropTypes.func,
  errors: PropTypes.object,
  handleCaptchaValidation: PropTypes.func,
  setDisabled: PropTypes.func,
  disabled: PropTypes.bool,
};
