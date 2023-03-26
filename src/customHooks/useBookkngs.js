import { useQuery } from "@tanstack/react-query";

const useBookings = (userEmail) => {
  const url = `https://buy-and-sell-server.vercel.app/bookings?email=${userEmail}`;
  const { data: bookingsProduct = [] } = useQuery({
    queryKey: ["bookings", userEmail],
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
  return bookingsProduct;
};
export default useBookings