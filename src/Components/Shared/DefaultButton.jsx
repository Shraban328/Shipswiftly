import PropTypes from "prop-types";
const DefaultButton = ({ text, bgColor }) => {
  return (
    <button
      className={`btn btn-primary border-none`}
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
DefaultButton.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
};
