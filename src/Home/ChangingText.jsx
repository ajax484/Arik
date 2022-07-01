import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useEffect } from 'react';

export default function ChangingText() {
    const changingTextRef = useRef();
    const q = gsap.utils.selector(changingTextRef);

    useEffect(() => {
        const changeTextTl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0
        })
            .fromTo(q(".changing-text"), { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: .6, stagger: 3.2 })
            .to(q(".changing-text"), { autoAlpha: 0, y: -30, duration: .6, delay: .3, stagger: 3 }, 2.5)

        return () => {
            changeTextTl.kill();
        }
    }, []);

    return (
        <section className="relative text-white h-80 md:h-96 overflow-hidden text-3xl bg-CTI bg-cover bg-center">
            {/* blue tint */}
            <div className="absolute top-0 left-0 bg-midnightBlue/40 h-full w-full"></div>

            {/* <img src={changingTextImg} className="absolute -top-52 left-0 w-full h-full -z-20" alt="changing text background" /> */}

            <div className="relative w-full h-full text-2xl md:text-3xl" ref={changingTextRef}>
                <p className="changing-text">“Go someplace new and experience new things”</p>
                <p className="changing-text">“Kickback and relax, you deserve it.”</p>
                <p className="changing-text">“Go sightseeing and have fun”</p>
                <p className="changing-text">“You can have that adventure you want”</p>
            </div>
        </section>
    )
}
