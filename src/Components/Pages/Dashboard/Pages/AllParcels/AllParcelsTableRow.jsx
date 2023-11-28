import PropTypes from "prop-types";
import DefaultButton from "../../../../Shared/DefaultButton";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import HeadingTitle from "../../../../Shared/HeadingTitle";
const AllParcelsTableRow = ({ parcel, idx }) => {
  // using material ui
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.5rem",
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td className="uppercase">{parcel.name}</td>
      <td>{parcel.phoneNumber}</td>
      <td>{parcel.bookingDate || parcel.deliveryDate}</td>
      <td>{parcel.deliveryDate || "pending"}</td>
      <td>${parcel.price || "pending"}</td>
      <td>{parcel.status}</td>
      <td>
        <p onClick={handleOpen}>
          <DefaultButton text={"update"} bgColor={"#1874C1"} />
        </p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form className="border rounded-lg p-9">
              <HeadingTitle title={"Select DeliveryMen"} size="text-2xl" />
              <select defaultValue={""} className="select w-full max-w-xs">
                <option disabled>Select DeliveryMen</option>
                <option>alu</option>
                <option>kodom</option>
                <option>jogodish</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <div className="gap-6">
                <label className="label">
                  <span className="label-text">Approximate Delivery Date:</span>
                </label>
                <input type="date" className="input input-bordered w-full" />
              </div>
              <div className="mt-4">
                <DefaultButton text={"Assign"} bgColor={"#1874C1"} />
              </div>
            </form>
          </Box>
        </Modal>
      </td>
    </tr>
  );
};

export default AllParcelsTableRow;
AllParcelsTableRow.propTypes = {
  parcel: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
