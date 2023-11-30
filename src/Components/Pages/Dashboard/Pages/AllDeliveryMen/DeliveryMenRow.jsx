import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const DeliveryMenRow = ({ deliveryMen, idx, reviews }) => {
  const [rating, setRating] = useState(0);
  const [totalParcels, setTotalParcels] = useState(0);
  useEffect(() => {
    const remainingReviews = reviews.filter(
      (review) => deliveryMen._id === review.deliveryMenId
    );
    if (remainingReviews.length) setTotalParcels(remainingReviews.length);
    else setTotalParcels(0);

    const totalRating = remainingReviews.reduce(
      (total, review) => total + review.rating,
      0
    );

    const averageRating = parseFloat(
      totalRating / remainingReviews.length
    ).toFixed(2);
    if (averageRating == isNaN) {
      setRating(0);
    } else {
      setRating(parseFloat(averageRating));
    }
    console.log(averageRating);
  }, [reviews, deliveryMen]);
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td>{deliveryMen?.name}</td>
      <td>{deliveryMen?.phoneNumber || "Not Added"}</td>
      <td>{totalParcels}</td>
      <td>{rating ? rating : "No Ratings"}</td>
    </tr>
  );
};

export default DeliveryMenRow;
DeliveryMenRow.propTypes = {
  deliveryMen: PropTypes.object.isRequired,
  idx: PropTypes.number,
  reviews: PropTypes.array,
};
