import React from 'react';

import Lottie from 'lottie-react';
import Animation from '../../../Animation/Animation.json'
const BuyAndSell = () => {
  return (
    <div className='mt-5'>
      <div className='text-center'>
        <h3 className='text-3xl'>Welcome To Our Website</h3>
        <p className="text-lg">
              It is a website where you can buy and sell your used items!
              Here you can sell your used items.  You can also buy used furniture if you want. If you want to sell an item, you must create a seller account.
            </p>
      </div>
      <Lottie className='w-full h-[600px]' animationData={Animation}></Lottie>
    </div>
  );
};

export default BuyAndSell;