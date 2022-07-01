import React, { useEffect, useState } from 'react';
import { HeroCarouselImg } from '../Assets/Img';

export default function Hero() {
    return (
        <section className="h-screen relative">
            <HeroCarousel />
            <HeroText />
            <HeroSearch />
        </section>
    )
}

function HeroCarousel() {
    const [slideX, setSlideX] = useState(0);

    useEffect(() => {
        const sliderInt = setInterval(() => setSlideX(prevState => prevState === 6 ? 0 : prevState + 1), 5000);

        return () => {
            clearInterval(sliderInt);
        };
    }, [slideX]);

    return (
        <div className="overflow-x-hidden overflow-y-auto no-scrollbar text-black max-w-full">
            {/* blue tint */}
            <div className="absolute top-0 left-0 bg-midnightBlue/40 h-screen w-full z-10"></div>

            <div
                className="flex flex-row transition-transform duration-300 w-max"
                style={{ transform: `translateX(-${14.285 * slideX}%)` }}
            >
                {
                    HeroCarouselImg.map((img, index) => (
                        <img src={img} alt="carousel 1" className="h-screen lg:w-screen" key={index} />
                    ))
                }
            </div>
        </div>
    )
}

const HeroText = () => (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-12 -translate-y-1/2 text-white z-20 w-full px-2 md:w-2/5 md:px-0 text-center md:text-left space-y-4 md:space-y-2">
        <h1 className="text-4xl md:text-5xl md:leading-tight font-poppinsMedium">
            Travel anywhere in the world
        </h1>
        <p className="md:text-xl">
            Explore and go anywhere you want in the world and have the adventure of a lifetime.
        </p>
        <button className="button py-2 px-6 rounded-md">
            Explore Now
        </button>
    </div>
)

const HeroSearch = () => (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center">
        <input type="text" className="w-[200px] md:w-[400px] py-3 px-4 md:px-16 rounded-l-md" placeholder="search" />
        <button className="button bg-gold text-white py-3 px-4 md:px-12 rounded-r-md">
            search
        </button>
    </div>
)