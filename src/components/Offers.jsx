import React from 'react';

const Offers = () => {
    return (
        <div className='max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between'>
            <p className='text-lg font-bold text-gray-700 cursor-pointer hover:underline underline-offset-8 decoration-2 duration:300'>Booking Incentives</p>
            <p className='text-lg font-bold text-gray-700 cursor-pointer hover:underline underline-offset-8 decoration-2 duration:300'>Competitive Rates</p>
            <p className='text-lg font-bold text-gray-700 cursor-pointer hover:underline underline-offset-8 decoration-2 duration:300'>Book With Flexibility</p>
            <p className='text-lg font-bold text-gray-700 cursor-pointer hover:underline underline-offset-8 decoration-2 duration:300'>Trip Insurance</p>
        </div>
    );
};

export default Offers;