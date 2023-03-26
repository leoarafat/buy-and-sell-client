import { useState, useEffect } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://buy-and-sell-server.vercel.app/category", {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setIsLoading(false);
      });
  }, []);

  return [categories, isLoading];
}

export default useCategories;
