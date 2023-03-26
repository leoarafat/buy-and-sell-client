import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function useSellers() {
  const [isLoading, setIsLoading] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      setIsLoading(true);
      const res = await fetch("https://buy-and-sell-server.vercel.app/users");
      const data = await res.json();
      setIsLoading(false);
      return data;
    },
  });

  const handleUserDelete = (userId) => {
    fetch(`https://buy-and-sell-server.vercel.app/users/admin/${userId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  return { users, isLoading, handleUserDelete };
}

export default useSellers;
