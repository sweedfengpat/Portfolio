'use client'
import React, { useRef } from "react";
import Buttons from "../common/buttonOutline";
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { applyAnimations } from "./gsapAnimations";

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
        applyAnimations(myskills)
        
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
                    <div className='flex flex-col gap-6 items-center w-24 h-24 md:w-36 md:h-36 justify-center'>
                        <Image className="w-[42px] h-auto" src={"/skill/" + skill.icon + ".svg"} alt="facebook" width={0} height={0} />
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
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-12 justify-center items-center gap-12'>
                {renderSkill}
            </div>
        </div>
    )
}