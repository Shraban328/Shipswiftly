import useAuth from "../../../../../Hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="ml-9 mt-9 h-[70vh] w-full border rounded-lg">
      <div className="h-1/3 w-full bg-[#1874C1] border-b-[5px] border-[#1890c1] relative">
        <div className="absolute -bottom-16 left-14 flex items-center gap-2">
          <img
            className="w-40  border-[4px] border-[#1890c1] rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <div className="mt-6 space-y-2">
            <h1 className="text-3xl font-bold text-white">
              {user?.displayName}
            </h1>
            <h1 className=" font-bold">{user?.email}</h1>
          </div>
        </div>
        <div className=" absolute right-2 -bottom-16 flex gap-4">
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary">update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
