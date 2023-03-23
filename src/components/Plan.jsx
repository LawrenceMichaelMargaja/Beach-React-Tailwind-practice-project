import React from 'react';

const Plan = () => {

    const slides = [
        {
            id: 1,
            url: 'https://images.pexels.com/photos/67818/pexels-photo-67818.jpeg?auto=compress&cs=tinysrgb',
        },
        {
            id: 2,
            url: 'https://images.pexels.com/photos/3355734/pexels-photo-3355734.jpeg?auto=compress&cs=tinysrgb',
        },
        {
            id: 3,
            url: 'https://images.pexels.com/photos/358358/pexels-photo-358358.jpeg?auto=compress&cs=tinysrgb',
        },

        {
            id: 4,
            url: 'https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb',
        },
        {
            id: 5,
            url: 'https://images.pexels.com/photos/2549089/pexels-photo-2549089.jpeg?auto=compress&cs=tinysrgb',
        },
    ];

    return (
        <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
            {/* Left Side */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg?auto=compress&cs=tinysrgb" alt="/"/>
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/2549089/pexels-photo-2549089.jpeg?auto=compress&cs=tinysrgb" alt="/"/>
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/3355734/pexels-photo-3355734.jpeg?auto=compress&cs=tinysrgb" alt="/"/>
                <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/358358/pexels-photo-358358.jpeg?auto=compress&cs=tinysrgb" alt="/"/>
                <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb" alt="/"/>
            </div>

            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, voluptate!
                </p>
                <p className='pb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci eius enim, fugiat impedit, incidunt ipsum itaque laborum nesciunt nisi optio quaerat recusandae repudiandae sed tempora tempore ut veniam! Quod.
                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
                </div>
            </div>
        </div>
    );
};

export default Plan;