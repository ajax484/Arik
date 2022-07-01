import React, { useEffect, useState } from 'react';
import { touristSpots1, touristSpots2, touristSpots3, touristSpots4, touristSpots5, touristSpots6, touristSpots7, touristSpots8, touristSpots9, touristSpots10, touristSpots11, touristSpots12 } from '../Assets/Img';

const carouselList = [
    {
        location: 'N-seoul Tower',
        country: 'south korea',
        image: touristSpots1
    },
    {
        location: 'Palazzo Ducale (Doge’s palace) and the bridge of sighs',
        country: 'Venice',
        image: touristSpots2
    },
    {
        location: 'Pamplemousses Botanical garden',
        country: 'mauritius',
        image: touristSpots3
    },
    {
        location: 'mount fuji',
        country: 'japan',
        image: touristSpots4
    },
    {
        location: 'Waimea Canyon State Park',
        country: 'hawaii',
        image: touristSpots5
    },
    {
        location: 'St Mark’s Basilica',
        country: 'venice',
        image: touristSpots6
    },
    {
        location: 'Underwater Waterfall',
        country: 'mauritius',
        image: touristSpots7
    },
    {
        location: 'Himeji Castle',
        country: 'japan',
        image: touristSpots8
    },
    {
        location: 'Changdeokgung Palace',
        country: 'south korea',
        image: touristSpots9
    },
    {
        location: 'Hakone Island',
        country: 'japan',
        image: touristSpots10
    },
    {
        location: 'Wailua Falls',
        country: 'hawaii',
        image: touristSpots11
    },
    {
        location: 'Port Louis WaterFront',
        country: 'mauritius',
        image: touristSpots12
    }
]

export default function TouristSpots() {
    return (
        <section className="py-16 space-y-8 flex flex-col">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-poppinsMedium">Popular Tourists Spots</h1>
            <TouristSpotsCarousel />
            <button className="self-center md:self-end md:mr-32 w-fit py-2 px-4 bg-transparent text-gold hover:bg-gold hover:text-white border-gold border-[1px] rounded-md transition-all duration-150 font-poppinsMedium">
                See More
            </button>
        </section>
    )
}

function TouristSpotsCarousel() {
    const [slideX, setSlideX] = useState(0);
    const total = window.innerWidth > 768 ? 10 : 11;

    useEffect(() => {
        const sliderInt = setInterval(() => setSlideX(prevState => prevState === total ? 0 : prevState + 1), 5000);

        return () => {
            clearInterval(sliderInt);
        };
    }, [slideX, total]);

    const CarouselItem = ({ image, location, country }) => (
        <div style={{ backgroundImage: `url(${image})` }} className={`h-[200px] w-[250px] md:h-[400px] md:w-[500px] bg-cover bg-center bg-no-repeat relative`}>
            <div className="absolute bottom-0 bg-midnightBlue/50 left-0 z-10 py-4 w-full flex flex-col spce-y-4 px-4 capitalize">
                <h2 className="text-base md:text-lg lg:text-2xl text-white">{location}</h2>
                <p className="text-cream text-xs md:text-base lg:text-lg" >{country}</p>
            </div>
        </div>
    )

    return (
        <div className="overflow-x-hidden overflow-y-auto no-scrollbar max-w-full ml-4 md:ml-8 lg:ml-16 relative">
            <button aria-label='backward' className={`absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-darkCerulean hover:bg-white hover:border-2 hover:text-darkCerulean p-2 md:p-4 rounded-full w-fit text-white ${slideX === 0 ? 'hidden' : ''}`} onClick={() => setSlideX(prevState => prevState === 0 ? total : prevState - 1)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" className="w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
            </button>

            <button aria-label='forward' className={`absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-darkCerulean hover:bg-white  hover:border-2 hover:text-darkCerulean p-2 md:p-4 rounded-full w-fit text-white ${slideX === total ? 'hidden' : ''}`} onClick={() => setSlideX(prevState => prevState === total ? 0 : prevState + 1)}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" className="w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
            </button>

            <div
                className="flex flex-row transition-transform duration-300 w-max space-x-6"
                style={{ transform: `translateX(-${8.333 * slideX}%)` }}
            >
                {
                    carouselList.map((item, index) => (<CarouselItem key={index} {...item} />))
                }
            </div>
        </div>
    )
}


