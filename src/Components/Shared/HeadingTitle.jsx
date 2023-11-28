import PropTypes from "prop-types";
const HeadingTitle = ({ title, size = "" }) => {
  return (
    <div className="flex justify-center my-4">
      <h1 className={`${size ? size : "text-4xl"} font-bold text-[#1874C1]`}>
        {title}
      </h1>
    </div>
  );
};

export default HeadingTitle;

HeadingTitle.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
};
