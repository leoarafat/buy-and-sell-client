import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    const {email,name,phone,productName,_id,price  } = data
    console.log(data)
    
    return (
        <div>
            <h3 className="text-3xl">Payment for {productName}</h3>
            <p className="text-xl">Please pay <strong>${price}Tk</strong> </p>
            <div className='w-96 my-12'>
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements> */}
            </div>
        </div>
    );
};

export default Payment;