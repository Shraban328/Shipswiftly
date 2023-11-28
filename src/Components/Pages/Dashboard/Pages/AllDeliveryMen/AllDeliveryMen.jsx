import useDeliveryMens from "../../../../../Hooks/useDeliveryMens";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import AllDeliveryMenTableHeading from "./AllDeliveryMenTableHeading";
import DeliveryMenRow from "./DeliveryMenRow";

const AllDeliveryMen = () => {
  const [deliveryMens] = useDeliveryMens();
  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <HeadingTitle title={"DeliveryMens"} />
      <table className="table">
        {/* head */}
        <AllDeliveryMenTableHeading />
        <tbody>
          {/* row  */}
          {deliveryMens.map((deliveryMen, idx) => (
            <DeliveryMenRow
              key={deliveryMen._id}
              idx={idx}
              deliveryMen={deliveryMen}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDeliveryMen;
