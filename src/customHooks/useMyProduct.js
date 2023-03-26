import { useQuery } from "@tanstack/react-query";

const useMyProducts = (userEmail) => {
  const url = `https://buy-and-sell-server.vercel.app/myProducts?email=${userEmail}`;

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProducts", userEmail],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return { myProducts, isLoading, refetch };
};
export default useMyProducts;
