import React from "react";
import useAdvertisements from "../../../../customHooks/useAdvertisements";
import AdvertiseCard from "./AdvertiseCard";

const AdvertiseItem = () => {
  const { advertisements, handleDeleteAdvertisement, refetch } =
    useAdvertisements();

  return (
    <section>
      {advertisements?.length > 0 && (
        <>
          <h1 className="text-4xl text-center my-3">Advertise Products</h1>

          <div className="flex justify-around items-center my-3 mx-auto">
            {advertisements?.map((advertise) => (
              <AdvertiseCard
                handleDelete={handleDeleteAdvertisement}
                key={advertise._id}
                advertise={advertise}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AdvertiseItem;
