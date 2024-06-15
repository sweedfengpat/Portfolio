'use client'
import React, { useRef } from "react";
import Buttons from "../common/buttonOutline";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applyAnimations } from "./gsapAnimations";

type project = {
    company: string;
    icon: string;
    position: string;
    duration: string;
    description: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function myProject() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const experience = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGSAP(() => {
        applyAnimations()


    }, { scope: experience });

    const projects: project[] = [
        {
            company: "KASIKORN Business-Technology Group (Outsource)",
            icon: "/icons/nextjs.svg",
            position: "Full stack Developer",
            duration: "Oct 2022 - Apr 2024",
            description: "Create a website through Next JS, React, and Electron JS, which is based on UX/UI and provided by the design team. \n Connect to the back-end through Axios, Fetch, and Socket. \n Build the system of the website, landing page, and back office according to the requirements of the customers. \n Create a database and create back-end system logic with NestJS gRPC and Prisma.\n A solution based on the requirements received by users is proposed."
        }, {
            company: "Y.I.M Corporation, Bangkok ",
            icon: "/icons/nextjs.svg",
            position: "Frontend Developer",
            duration: "Nov 2021 - Oct 2022",
            description: "Create a Website through Next JS, React, and Electron JS is based on UX/UI and provided by the design team. \n Connect to back-end through Axios, Fetch and Socket \n Create a mobile applications with React Native based on UX/UI and provided by the design team.\n Build the basic system of the website, landing page and back office according to the requirements of the customers."
        }
    ]

    const renderProjects = projects.map((project, index) => {
        return (
            <div className='bg-black experience rounded-xl px-8 py-12 flex flex-col gap-6 bottom-2 border-white hover:border-black hover:bg-zinc-800 duration-500 border-[1px]' key={index + project.company}>
                <div className='flex items-center text-h4 font-semibold'>
                    <span className=' font-bold'>{project.position}</span>
                </div>
                <div className='flex justify-between items-center'>

                    <div className='flex gap-2 items-center text-h4 font-semibold'>

                        <div className="flex items-center">
                            <span className=' text-h6 font-semibold text-zinc-300'>{project.company}</span>
                        </div>

                    </div>
                    <span className='text-h6 font-semibold text-zinc-300'>{project.duration}</span>
                </div>
                <div className='flex flex-col gap-4'>

                    <ul className='text-p2 text-zinc-300 list-disc pl-8 '>
                        {project.description.split('\n').map((line, i) => (
                            <li key={i} className='text-p2 text-zinc-300 !leading-8'>{line}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    })





    return (
        <div className=' flex flex-col justify-center items-center text-white' ref={experience}>
            <div className=''>
                <span className='text-display title'>My </span>
                <span className='text-display font-extrabold title'>Experience</span>
            </div>
            <div className='grid grid-cols-1 mt-12 justify-center items-center gap-12'>
                {renderProjects}
            </div>
        </div>
    )
}