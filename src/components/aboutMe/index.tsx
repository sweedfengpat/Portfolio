'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Buttons from "../common/buttonOutline";
import {useGSAP } from "@gsap/react"

export default function AboutMe() {

    const containers = useRef(null);

    useGSAP(() => {

        gsap.from(".image", {
            duration: 2,
            opacity: 0,
            y: 0,
            x: 150,
            stagger: 0.2,
            ease: "expo.inOut",
        });
        gsap.to(".image", {
            duration: 2,
            opacity: 1,
            y: 0,
            x: -100,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.from(".text-display", {
            duration: 2,
            opacity: 0,
            x: -150,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.to(".text-display", {
            duration: 2,
            opacity: 1,
            x: 0,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.from(".text-outline", {
            duration: 2,
            opacity: 0,
            x: -150,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.to(".text-outline", {
            duration: 2,
            opacity: 1,
            x: 0,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.from(".social", {
            duration: 2,
            opacity: 0,
            x: -150,
            y: 150,
            stagger: 0.3,
            ease: "expo.inOut",
        });

        gsap.to(".social", {
            duration: 2,
            opacity: 1,
            x: 0,
            y: 0,
            stagger: 0.3,
            ease: "expo.inOut",
        });

        gsap.from(".banner", {
            duration: 1,
            opacity: 0,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.to(".banner", {
            duration: 1,
            opacity: 1,
            stagger: 0.2,
            ease: "expo.inOut",
        });

        gsap.from(".fadeout", {
            duration: 3,
            opacity: 0,
            y: 150,
            stagger: 0.3,
            ease: "expo.inOut",
        });

        gsap.to(".fadeout", {
            duration: 3,
            opacity: 1,
            y: 0,
            stagger: 0.3,
            ease: "expo.inOut",
        });


        
  

      },
      { scope: containers }
    );


    return (
        <div className="flex justify-between gap-8 containers " ref={containers}>
            <div className="w-full flex flex-col justify-between translate-x-12 " >
                <div></div>
                <div className="  p-4 rounded-lg banner">
                    <div className="flex gap-4">
                        <span className="text-display whitespace-nowrap">{"Hello I'm"}</span>
                        <span className="text-display font-extrabold  whitespace-nowrap">{"Patarapong Charoenpol."}</span>
                    </div>
                    <div className="flex gap-4">
                        <span className=" text-display font-extrabold hover-underline-animation">{"Full Stack"}</span>
                        <span className=" text-outline font-extrabold">{"Developer"}</span>
                    </div>
                    <div className="flex gap-4 ">
                        <span className="text-display">{"from "}</span>
                        <span className="text-display font-extrabold">{"Thailand"}</span>
                    </div>
                    <div className="mt-8">
                        <span className="text-p2 text-zinc-500 fadeout">{"I'm a Full Stack Developer with a passion for creating innovative solutions."}</span>
                        <br/>
                        <span className="text-p2 text-zinc-500 fadeout">{"I'm a Full Stack Developer with a passion for creating innovative solutions."}</span>
                        <br/>
                        <span className="text-p2 text-zinc-500 fadeout">{"I'm a Full Stack Developer with a passion for creating innovative solutions."}</span>
                    </div>
                </div>
                <div className="flex gap-6 w-fit translate-x-[14rem]">
                    <div className=" outline w-fit h-fit rounded-md social">
                        <Buttons className="">
                            <Image className="" src="/icon/facebook.svg" alt="facebook" width={24} height={12} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="" src="/icon/linkedin.svg" alt="facebook" width={24} height={12} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="" src="/icon/line.svg" alt="facebook" width={24} height={12} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="" src="/icon/gmail.svg" alt="facebook" width={24} height={0} />
                        </Buttons>
                    </div>
                </div>
            </div>
            <Image className="image" src="/boys.svg" alt="boy" width={800} height={12} />


        </div>
    )

}

