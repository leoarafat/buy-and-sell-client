import { toast } from 'react-hot-toast';
import { useQuery } from "@tanstack/react-query";

function useAdvertisements() {
  const { data: advertisements = [], refetch } = useQuery({
    queryKey: ["advertisements"],
    queryFn: async () => {
      const res = await fetch("https://buy-and-sell-server.vercel.app/advertise");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteAdvertisement = (id) => {
    fetch(`https://buy-and-sell-server.vercel.app/users/advertise/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
          refetch();
        }
      });
  };

  return { advertisements, handleDeleteAdvertisement, refetch };
}
export default useAdvertisements