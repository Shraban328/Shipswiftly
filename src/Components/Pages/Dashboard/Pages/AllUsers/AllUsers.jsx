import { useQuery } from "@tanstack/react-query";
import HeadingTitle from "../../../../Shared/HeadingTitle";
import AllUsersTableHeading from "./AllUsersTableHeading";
import AllUsersTableRow from "./AllUsersTableRow";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["all_users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/allUsers");
      return res.data;
    },
  });
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/users/allParcels`);
      return res.data;
    },
  });

  console.log(parcels.length);
  return (
    <div className="overflow-x-auto bg-base-200 ml-9 mt-9">
      <HeadingTitle title={"Users data"} />
      <table className="table">
        {/* head */}
        <AllUsersTableHeading />
        <tbody>
          {/* row  */}
          {users.map((user, idx) => (
            <AllUsersTableRow
              key={user._id}
              idx={idx}
              user={user}
              parcels={parcels}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
