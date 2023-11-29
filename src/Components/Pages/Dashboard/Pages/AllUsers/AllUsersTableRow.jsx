import DefaultButton from "../../../../Shared/DefaultButton";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import UserRoleUpdateModal from "./UserRoleUpdateModal";
const AllUsersTableRow = ({ user, idx, parcels }) => {
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
  const [userParcels, setUserParcels] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const remainingParcels = parcels.filter(
      (parcel) => parcel.email === user.email
    );
    setUserParcels(remainingParcels);
  }, [parcels, user.email]);
  return (
    <tr className="text-lg hover:bg-slate-300">
      <th>{idx + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.number || "N/A"}</td>
      <td>{userParcels.length}</td>
      <td>
        <p onClick={handleOpen}>
          <DefaultButton text={"Update User Role"} bgColor={"#1874C1"} />
        </p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserRoleUpdateModal />
          </Box>
        </Modal>
      </td>
    </tr>
  );
};

export default AllUsersTableRow;
AllUsersTableRow.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  idx: PropTypes.number,
};
