import React from 'react';
import { arikLogo } from './Assets/Img';

export default function Footer() {
    return (
        <footer className=" bg-midnightBlue">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-center gap-12 px-4 md:px-8 pt-16 pb-4 text-white">
                <div className="space-y-6">
                    <img src={arikLogo} alt="arik logo" className="h-16 w-40" />
                    <p className="text-xs md:text-sm text-gray-300">
                        This is an agency that is responsible for travels and tours. Our main objective is providing information on amazing places that you can go on vacations either as a family, a couple or even alone. We offer various services that are all aimed at providing the best comfort you could ever ask for.
                        Go on that vacation you have been wanting to go on.
                        Take that break you deserve.
                        Have the adventure of a lifetime.
                    </p>
                </div>

                <div className="space-y-10 lg:mx-auto">
                    <h3 className="capitalize text-lg md:text-xl">quick links:</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li>
                            Home
                        </li>
                        <li>
                            Destination
                        </li>
                        <li>
                            Blogs
                        </li>
                        <li>
                            Contact Us
                        </li>
                    </ul>
                </div>

                <div className="space-y-10 flex flex-col lg:items-center">
                    <h3 className="capitalize text-lg md:text-xl">contact us:</h3>
                    <ul className="space-y-6 text-gray-300">
                        <li className="flex space-x-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gold h-8 w-8" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path></svg>
                            <span>
                                No 24, Adegoke Estate, Victoria Island, Lagos
                            </span>
                        </li>
                        <li className="flex space-x-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gold h-8 w-8 scale-x-[-1]" xmlns="http://www.w3.org/2000/svg"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>
                            <span>+234-9105-453-876</span>
                        </li>
                        <li className="flex space-x-4">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-gold h-7 w-7" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
                            <span>ArikTravels&Tours@gmail.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            <Copyright />
        </footer>
    )
}

const Copyright = () => (
    <div className="py-4 text-gray-300 text-center">
        {new Date().getFullYear()} All Rights Reserved. Arik by <a className="text-white text-sm md:text-base lg:text-lg hover:font-semibold hover:underline hover:underline-offset-1" href="https://portfolio-ajax484.vercel.app/">Y.B. UBAH</a>
    </div>

)
