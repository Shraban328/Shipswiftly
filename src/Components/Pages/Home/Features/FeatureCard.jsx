import PropTypes from "prop-types";
const FeatureCard = ({ feature }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 w-1/2 mx-auto">
        <img src={feature.icon} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center px-0">
        <h2 className="card-title">{feature.featureTitle}</h2>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
FeatureCard.propTypes = {
  feature: PropTypes.object,
};
