import PropTypes from "prop-types";
import DefaultButton from "../../../../Shared/DefaultButton";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "./ModalForm";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
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
  const axiosSecure = useAxiosSecure();
  const { data: deliveryMens = [], refetch } = useQuery({
    queryKey: ["delivery_mens"],
    queryFn: async () => {
      const res = await axiosSecure.get("/deliveryMens");
      return res.data;
    },
  });
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
      <td>
        <span>{parcel.status}</span>
      </td>
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
            <ModalForm
              deliveryMens={deliveryMens}
              parcelId={parcel._id}
              refetch={refetch}
            />
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
