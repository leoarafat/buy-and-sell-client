import React from "react";
import useTitle from "../../../customHooks/useTitle";
import useSellers from "../../../customHooks/useSellers";
import Loader from "../../../components/Loader";

const AllSeller = () => {
  useTitle("allseller");
  const { users, isLoading, handleUserDelete } = useSellers();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <h3 className="text-3xl">All Seller</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                {user?.role === "seller" && (
                  <>
                    <th>{i + "0"}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        onClick={() => handleUserDelete(user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
