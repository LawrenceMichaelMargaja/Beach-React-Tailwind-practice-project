import React, {useEffect, useState} from 'react';
import { useWindowSize } from "react-use";
import classNames from "classnames";

const Hero = () => {

    const slides = [
        {
            id: 1,
            url: 'https://images.pexels.com/photos/67818/pexels-photo-67818.jpeg?auto=compress&cs=tinysrgb&',
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);

    const { width } = useWindowSize();

    const screenSize = classNames({
        "sm": width < 768,
        "md": width >= 768 && width < 1024,
        "lg": width >= 1024
    });

    useEffect(() => {
        let timer;

        if (!isUserInteracting) {
            timer = setTimeout(() => {
                const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }, 5000);
        }

        return () => {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        };
    }, [currentIndex, isUserInteracting])

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const handleTouchEnd = () => {
        setIsUserInteracting(false);
    }

    const handleMouseUp = () => {
        setIsUserInteracting(false);
    }

    const displayHeroText = () => {

        return (
            <>
                {screenSize === "sm" ?
                    <div>

                    </div>
                    // <div className='relative w-full h-full text-gray-200 max-h-full h-full bg-black/40 flex flex-col justify-center'>
                    //     <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         The
                    //     </h1>
                    //     <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         <span className='text-yellow-200'>Best</span>
                    //     </h1>
                    //     <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         <span className='text-yellow-200'>Foods </span>
                    //     </h1>
                    //     <h1 className='px-4 ml-[5%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         Delivered
                    //     </h1>
                    // </div>
                    :
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col bg-black/30 justify-center text-white'>
                        <div className='md:left-[10%] max-w-[1100px] m-auto absolute top-30 p-4'>
                            <p>All Inclusive</p>
                            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getaways</h1>
                            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum explicabo non quos rem? Eligendi ex facere ipsam sit voluptas.</p>
                            <button className='bg-white text-black text-bold'>Reserve Now</button>
                        </div>
                    </div>
                    // <div className='relative w-full h-full text-gray-200 max-h-full h-full bg-black/40 flex flex-col justify-center'>
                    //     <h1 className='px-4 ml-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         <span className='text-orange-400'>Private Beaches</span>
                    //     </h1>
                    //     <h1 className='px-4 ml-[8%] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                    //         and <span className='text-yellow-200'>Getaways </span>
                    //     </h1>
                    //     {/*<button>Reserve Now</button>*/}
                    // </div>
                }
            </>
        )
    }

    return (
        <div className='w-full h-screen'>
            {/* Overlay */}
            {/*<div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='top-0 left-0 w-full h-screen object-cover duration-500'>*/}
            {/*    /!*{displayHeroText()}*!/*/}
            {/*    <div className='absolute top-0 left-0 w-full h-full flex flex-col bg-black/30 justify-center text-white'>*/}
            {/*        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>*/}
            {/*            <p>All Inclusive</p>*/}
            {/*            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getaways!</h1>*/}
            {/*            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum explicabo non quos rem? Eligendi ex facere ipsam sit voluptas.</p>*/}
            {/*            <button className='bg-white text-black text-bold'>Reserve Now</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/67818/pexels-photo-67818.jpeg?auto=compress&cs=tinysrgb&" alt="girl at beach"/>
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] top-[25%] max-w-[1100px] m-auto absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches and Getaways</h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum explicabo non quos rem? Eligendi ex facere ipsam sit voluptas.</p>
                    <button className='bg-white text-black text-bold'>Reserve Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;