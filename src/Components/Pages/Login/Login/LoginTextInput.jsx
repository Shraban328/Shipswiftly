import PropTypes from "prop-types";
const LoginTextInput = ({
  title,
  type,
  placeholder,
  register,
  registerName,
}) => {
  return (
    <div className="form-control">
      {" "}
      <>
        <label className="label">
          <span className="label-text">{title}</span>
        </label>

        <input
          {...register(`${registerName}`, { required: true })}
          type={type}
          placeholder={placeholder}
          className="input input-bordered"
        />
      </>
    </div>
  );
};

export default LoginTextInput;
LoginTextInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  registerName: PropTypes.string,
  handleCaptchaValidation: PropTypes.func,
};
