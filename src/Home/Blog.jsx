import React, { useEffect, useState } from 'react'
import { blogImage1, blogImage2, blogImage3 } from '../Assets/Img'

const blogList = [
    {
        name: 'La Cuvette Beach',
        image: blogImage1,
        comment: "The clear waves, turquoise waters and white coloured sand of La Cuvette Beach provides the visitors with much required serenity and calm surroundings. Dotted with palm and coconut trees and home to numerous local food joints, here at La Cuvette Beach you will get to enjoy numerous entertainment options. The pristine shoreline of this beach also"
    },
    {
        name: 'Le Pouce Mountain',
        image: blogImage2,
        comment: "Le Pouce - This mountain is the third highest in Mauritius, peaking at 812m, is located in the North West of the island between the Pieter Both and the Signal mountain. Le Pouce is known as ‘The Thumb’ peak. The first person to climb Le Pouce is accredited as Charles Darwin.From the peak you will have an amazing 360 degree view of Mauritius. The sight of the northern part of the island is splendid, with"
    },
    {
        name: 'Trou Aux Cerfs',
        image: blogImage3,
        comment: "Trou Aux Cerfs is a dormant volcanic crater located in the green heart of Curepipe. Though it has been dormant for more than hundreds of thousands of years, many experts believe that it could become active again. Besides this fact making it an interesting place to visit when you are in Mauritius, but also there is an opportunity to witness a panoramic landscape from this place. It is a favored"
    }
]

export default function Blog() {
    return (
        <section className="my-16 py-16 flex flex-col justify-center bg-blogBg bg-cover bg-center relative">

            {/* blue tint */}
            <div className="absolute top-0 left-0 bg-midnightBlue/50 h-full w-full"></div>

            <div className="relative z-10 space-y-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-poppinsMedium text-white">Our Blog</h1>
                <CardGrid />
            </div>

        </section>
    )
}

const CardGrid = () => {
    const [slideX, setSlideX] = useState(0);

    useEffect(() => {
        if (window.innerWidth >= 768) return;

        const sliderInt = setInterval(() => setSlideX(prevState => prevState === 2 ? 0 : prevState + 1), 3000);

        return () => clearInterval(sliderInt);

    }, [slideX]);

    const CardItem = ({ name, image, comment }) => (
        <div className="shadow-md bg-white rounded-md flex flex-col md:flex-row lg:flex-col w-[calc(100vw-2rem)] md:w-[75vw] lg:w-full">
            <img src={image} alt={name} className="h-[200px] md:h-full lg:h-[200px] w-full md:w-1/2 lg:w-full rounded-t-md md:rounded-t-none md:rounded-l-md lg:rounded-bl-none lg:rounded-t-md" />

            <div className="space-y-4 p-4">
                <h2 className="text-center font-poppinsMedium text-xl">{name}</h2>
                <p className="text-sm">
                    {comment}.....    <button className="text-gold hover:underline">Continue Reading</button>
                </p>
            </div>
        </div>
    )

    return (
        <div className="overflow-x-hidden overflow-y-auto no-scrollbar max-w-full flex md:justify-center lg:px-0">
            <div
                className="flex md:flex-col justify-center lg:grid lg:grid-cols-3 gap-8 transition-transform duration-300 w-max lg:w-full pl-4 lg:px-8"
                style={{ transform: `translateX(-${33.33 * slideX}%)` }}
            >
                {
                    blogList.map((item, index) => <CardItem key={index} {...item} />)
                }
            </div>
        </div>

    )
}