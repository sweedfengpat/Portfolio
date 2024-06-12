'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Buttons from "../common/buttonOutline";
import { useGSAP } from "@gsap/react"
import { applyAnimations } from "./gsapAnimations";

export default function Home() {

    const containers = useRef(null);

    useGSAP(() => {
        applyAnimations(containers);
    },
        { scope: containers }
    );


    return (
        <div className="flex justify-between gap-8 containers flex-col items-center xl:flex-row area xl:pt-20 w-full" ref={containers}>
            <div className="">
                <Image className="image2 xl:!w-[600px] lg:!w-[500px] !w-[400px] duration-500 h-auto  " src="/aboutme.svg" alt="boy" width={0} height={0} />

            </div>
            <div className="w-full flex flex-col justify-between items-start gap-4 xl:ml-32" >
                <div className=''>
                    <span className='text-display title'>About </span>
                    <span className='text-display font-extrabold title'>Me</span>
                </div>
                <div className=' max-w-[700px]'>
                    <span className='text-p2 fadeout text-zinc-500'>I am a committed Full Stack Programmer with 2 years of professional experience, either in the back or front, in software development. In that quest, I am sure of bringing all kinds of languages and technologies to bear effectively in developing quality web applications. My productivity is at its highest when working in a team, from which I can tie in modern development languages and technologies with ease, delivering top results. I am therefore driven by the urge to continue learning and to be at the top of fast-changing technological landscapes. </span>

                    <br/>
                    <br/>
                    <br/>
                    <span className='text-p2 fadeout text-zinc-500'>I have had a successful career thus far in the development and management of a wide range of web and mobile applications, ensuring that complex requirements are translated into efficient, effective, and user-friendly solutions. My foundation is laid on both good technical skills and project management, which implies that I am well-equipped to take your project to success. </span>

                </div>

            </div>


        </div>
    )

}

