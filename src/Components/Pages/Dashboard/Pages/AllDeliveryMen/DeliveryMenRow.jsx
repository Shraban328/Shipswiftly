import PropTypes from "prop-types";
const DeliveryMenRow = ({ deliveryMen, idx }) => {
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{deliveryMen.parcelType}</td>
      <td>{deliveryMen?.name}</td>
      <td>{deliveryMen?.phoneNumber || "need to add"}</td>
      <td>{deliveryMen?.parcelDelivered || "need to add"}</td>
      <td>{deliveryMen?.review || "need to add too"}</td>
    </tr>
  );
};

export default DeliveryMenRow;
DeliveryMenRow.propTypes = {
  deliveryMen: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
