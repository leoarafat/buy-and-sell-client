import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast";

const useUserManagement = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://buy-and-sell-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMakeAdmin = (userId) => {
    setIsLoading(true);
    setError(null);

    fetch(`https://buy-and-sell-server.vercel.app/users/admin/${userId}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Verified Successful");
          refetch();
        } else {
          setError("Failed to make user admin");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to make user admin");
        setIsLoading(false);
      });
  };

  const handleUserDelete = (userId) => {
    setIsLoading(true);
    setError(null);

    fetch(`https://buy-and-sell-server.vercel.app/users/admin/${userId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successful");
          refetch();
        } else {
          setError("Failed to delete user");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setError("Failed to delete user");
        setIsLoading(false);
      });
  };

  return { users, isLoading, error, handleMakeAdmin, handleUserDelete };
};
export default useUserManagement