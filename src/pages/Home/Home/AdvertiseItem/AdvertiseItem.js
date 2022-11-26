import React, { useEffect, useState } from "react";
import AdvertiseCard from "./AdvertiseCard";

const AdvertiseItem = () => {
  const [advertiseItem, setAdvertiseItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/advertise")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdvertiseItem(data);
      });
  }, []);
  return (
    <section>
      {advertiseItem.length > 0 && (
        <>
          <h1 className="text-4xl text-center my-3">Advertise Item</h1>

          <div className="grid md:grid-cols-2 gap-3 my-3">
            {advertiseItem.map((advertise) => (
              <AdvertiseCard advertise={advertise} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AdvertiseItem;
