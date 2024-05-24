'use client'
import React, { useRef } from "react";
import Buttons from "../common/buttonOutline";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const myskills = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useGSAP(() => {

        const skillanime = gsap.utils.toArray(".skill");

        skillanime.forEach((skill) => {


            const anime = gsap.from(".skill", {
                duration: 1,
                opacity: 0,
                y: 0,
                x: 250,
                stagger: 0.07,
                ease: "expo.inOut",
            });
            const animeto = gsap.to(".skill", {
                duration: 1,
                opacity: 1,
                y: 0,
                x: 0,
                stagger: 0.07,
                ease: "expo.inOut"
            });

            ScrollTrigger.create({
                trigger: ".skill",
                start: "center 70%",
                onEnter: () => {
                    anime.play();
                    animeto.play();
                }
            });

            ScrollTrigger.create({
                trigger: ".skill",
                onLeaveBack: () => {
                    anime.pause(0)
                    animeto.pause(0)
                }
            })
        });

        gsap.from(".title", {
            duration: 1,
            opacity: 0,
            y: 0,
            x: 150,
            stagger: 0.2,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".title",
            }
        });

        gsap.to(".title", {
            duration: 1,
            opacity: 1,
            y: 0,
            x: 0,
            stagger: 0.2,
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".title",
            }
        });


        // gsap.from(".skill", {
        //     duration: 2,
        //     opacity: 0,
        //     y: 0,
        //     x: 250,
        //     stagger: 0.2,
        //     ease: "expo.inOut",
        // });
        // gsap.to(".skill", {
        //     duration: 2,
        //     opacity: 1,
        //     y: 0,
        //     x: 0,
        //     stagger: 0.2,
        //     ease: "expo.inOut",
        //     scrollTrigger: {
        //         trigger: ".skill",
        //         start: "center 70%",
        //         scrub: true,
        //     }
        // }

        // );
    }, { scope: myskills });

    const projects: project[] = [
        {
            company: "Google",
            icon: "/icons/nextjs.svg",
            position: "Frontend Developer",
            duration: "2021 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna at felis aliquam ultrices. Pellentesque habitant morbi tristique sen"
        },{
            company: "Facebook",
            icon: "/icons/nextjs.svg",
            position: "Frontend Developer",
            duration: "2021 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna at felis aliquam ultrices. Pellentesque habitant morbi tristique sen"
        }
    ]

    const renderProjects = projects.map((project, index) => {
        return (
            <div className='bg-black rounded-xl px-8 py-12 flex flex-col gap-6 bottom-2 border-white hover:border-black hover:bg-zinc-800 duration-500 border-[1px]' key={index+project.company}>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center text-h4 font-semibold'>
                        {/* <Image src={project.icon} alt={project.company} width={24} height={24} /> */}
                        <span className=' font-bold'>{project.position}</span>
                        <span className=''>{"at"}</span>
                        <span className=' font-bold'>{project.company}</span>
                    </div>
                    <span className='text-h6 font-semibold text-zinc-300'>{project.duration}</span>
                </div>
                <div className='flex flex-col gap-2'>
                    
                    <span className='text-p2 text-zinc-300'>{project.description}</span>
                    <span className='text-p2 text-zinc-300'>{project.description}</span>
                    <span className='text-p2 text-zinc-300'>{project.description}</span>
                </div>
            </div>
        )
    })





    return (
        <div className=' flex flex-col justify-center items-center text-white' ref={myskills}>
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