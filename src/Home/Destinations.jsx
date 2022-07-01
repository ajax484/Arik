import React, { useEffect, useState } from 'react';
import { destinations1, destinations2, destinations3, destinations4, destinations5, destinations6, destinations7 } from '../Assets/Img';

const carouselList = [
  {
    image: destinations1,
    heading: "Tokyo, Japan",
    text: "$99.99"
  },
  {
    image: destinations2,
    heading: "Seoul, South Korea",
    text: "$99.99"
  },
  {
    image: destinations3,
    heading: "Auckland, New Zealand",
    text: "$99.99"
  },
  {
    image: destinations4,
    heading: "Reykjavik, Iceland",
    text: "$99.99"
  },
  {
    image: destinations5,
    heading: "Honolulu, Hawaii",
    text: "$99.99"
  },
  {
    image: destinations6,
    heading: "Port Louis, Mauritius",
    text: "$99.99"
  },
  {
    image: destinations7,
    heading: "Venice, Italy",
    text: "$99.99"
  }
]

export default function Destinations() {
  return (
    <section className="py-16 space-y-8 flex flex-col">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-poppinsMedium">Popular Destinations</h1>
      <DestinationsCarousel />
      <button className="self-center md:self-end md:mr-32 w-fit py-2 px-4 bg-transparent text-gold hover:bg-gold hover:text-white border-gold border-[1px] rounded-md transition-all duration-150 font-poppinsMedium">
        See More
      </button>
    </section>
  )
}

function DestinationsCarousel() {
  const [slideX, setSlideX] = useState(0);
  const total = window.innerWidth > 768 ? 5 : 6;

  useEffect(() => {
    const sliderInt = setInterval(() => setSlideX(prevState => prevState === total ? 0 : prevState + 1), 5000);

    return () => {
      clearInterval(sliderInt);
    };
  }, [slideX]);

  const CarouselItem = ({ image, heading, text }) => (
    <div style={{ backgroundImage: `url(${image})` }} className={`h-[200px] w-[250px] md:h-[400px] md:w-[500px] bg-cover bg-center bg-no-repeat relative`}>
      <div className="absolute bottom-0 bg-midnightBlue/50 left-0 z-10 h-1/4 w-full flex flex-col justify-evenly px-4">
        <h2 className="text-base md:text-xl lg:text-2xl text-white">{heading}</h2>
        <p className="text-cream text-xs md:text-base lg:text-lg" >{text}</p>
      </div>
    </div>
  )

  return (
    <div className="overflow-x-hidden overflow-y-auto no-scrollbar max-w-full ml-4 md:ml-8 lg:ml-16 relative">
      <button aria-label=' backward' className={`absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-darkCerulean hover:bg-white hover:border-2 hover:text-darkCerulean p-2 md:p-4 rounded-full w-fit text-white ${slideX === 0 ? 'hidden' : ''}`} onClick={() => setSlideX(prevState => prevState === 0 ? total : prevState - 1)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" className="w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg"><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg>
      </button>

      <button aria-label="forward" className={`absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-darkCerulean hover:bg-white  hover:border-2 hover:text-darkCerulean p-2 md:p-4 rounded-full w-fit text-white ${slideX === total ? 'hidden' : ''}`} onClick={() => setSlideX(prevState => prevState === total ? 0 : prevState + 1)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" className="w-5 h-5 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
      </button>

      <div
        className="flex flex-row transition-transform duration-300 w-max space-x-6"
        style={{ transform: `translateX(-${14.285 * slideX}%)` }}
      >
        {
          carouselList.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))
        }
      </div>
    </div>
  )
}
