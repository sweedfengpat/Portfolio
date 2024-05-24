'use client'
import React, { useRef } from "react";
import Buttons from "../common/buttonOutline";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Skill = {
    name: string;
    icon: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function mySkill() {

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



    const mySkill: Skill[] = [
        {
            name: 'Git',
            icon: 'git'
        },
        {
            name: 'HTML',
            icon: 'html'
        }, {
            name: 'CSS',
            icon: 'css'
        }, {
            name: 'Javascript',
            icon: 'javascript'
        }, {
            name: 'Typescript',
            icon: 'typescript'
        }, {
            name: 'React',
            icon: 'react'
        }, {
            name: 'Next.js',
            icon: 'nextjs'
        }, {
            name: 'TailwindCSS',
            icon: 'tailwindcss'
        }, {
            name: 'Node.js',
            icon: 'nodejs'
        }, {
            name: 'Socket.io',
            icon: 'socketio'
        }, {
            name: 'Scss/Sass',
            icon: 'sass'
        }, {
            name: 'Material-UI',
            icon: 'material-ui'
        }, {
            name: 'Ant design',
            icon: 'ant-design'
        }, {
            name: 'Electron JS',
            icon: 'electron'
        }, {
            name: 'Graphql',
            icon: 'graphql'
        }, {
            name: 'Apollo',
            icon: 'apollo'
        }, {
            name: 'React Native',
            icon: 'react'
        }, {
            name: 'Golang',
            icon: 'golang'
        }, {
            name: 'gRPC Microservices',
            icon: 'grpc'
        }, {
            name: 'Wordpress',
            icon: 'wordpress'
        }

    ]

    const renderSkill = mySkill.map((skill, index) => {
        return (
            <div className="outline rounded-md skill" key={index}>
                <Buttons className="" >
                    <div className='flex flex-col gap-6 items-center w-36 h-36 justify-center'>
                        <Image className="" src={"/skill/" + skill.icon + ".svg"} alt="facebook" width={42} height={0} />
                        <span className='text-h5 font-bold text-center text-black'>{skill.name}</span>
                    </div>
                </Buttons>
            </div>


        )
    }
    )





    return (
        <div className=' flex flex-col justify-center items-center' ref={myskills}>
            <div className=''>
                <span className='text-display title'>My </span>
                <span className='text-display font-extrabold title'>Skills</span>
            </div>
            <div className='grid grid-cols-5 mt-12 justify-center items-center gap-12'>
                {renderSkill}
            </div>
        </div>
    )
}