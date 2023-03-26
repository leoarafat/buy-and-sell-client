import React from "react";
import { toast } from "react-hot-toast";
import Loader from "../../../components/Loader";
import useTitle from "../../../customHooks/useTitle";
import useUserManagement from "../../../customHooks/useUsersManagement";

const AllUser = () => {
  useTitle("alluser");
  const { users, isLoading, error, handleMakeAdmin, handleUserDelete } =
    useUserManagement();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    toast.error("something went wrong");
  }
  return (
    <div>
      <h1>All User</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
              <th>Make Verify</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={i} className="hover">
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-secondary"
                    >
                      Make Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="btn btn-xs btn-accent"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
