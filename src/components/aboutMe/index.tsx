'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Buttons from "../common/buttonOutline";
import { useGSAP } from "@gsap/react"
import { applyAnimations } from "./gsapAnimations";

export default function AboutMe() {

    const containers = useRef(null);

    useGSAP(() => {
        applyAnimations(containers);
    },
        { scope: containers }
    );


    return (
        <div className="flex justify-between gap-8 containers flex-col-reverse items-center xl:flex-row" ref={containers}>
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
                        <br />
                        <span className="text-p2 text-zinc-500 fadeout">{"I'm a Full Stack Developer with a passion for creating innovative solutions."}</span>
                        <br />
                        <span className="text-p2 text-zinc-500 fadeout">{"I'm a Full Stack Developer with a passion for creating innovative solutions."}</span>
                    </div>
                </div>
                <div className="flex gap-6 w-fit translate-x-[14rem]">
                    <div className=" outline w-fit h-fit rounded-md social">
                        <Buttons className="">
                            <Image className="w-[24px] h-auto" src="/icon/facebook.svg" alt="facebook" width={0} height={0} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="w-[24px] h-auto" src="/icon/linkedin.svg" alt="facebook" width={0} height={0} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="w-[24px] h-auto" src="/icon/line.svg" alt="facebook" width={0} height={0} />
                        </Buttons>
                    </div>
                    <div className=" outline w-fit rounded-md social">
                        <Buttons className="">
                            <Image className="w-[24px] h-auto" src="/icon/gmail.svg" alt="facebook" width={0} height={0} />
                        </Buttons>
                    </div>
                </div>
            </div>

            <Image className="image w-[800px] h-auto translate-x-24 lg:translate-x-0" src="/boys.svg" alt="boy" width={0} height={0} />


        </div>
    )

}

