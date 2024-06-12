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
        <div className="flex justify-between gap-8 containers flex-col-reverse items-center xl:flex-row area" ref={containers}>
            <div className="w-full flex flex-col justify-between lg:translate-x-12 gap-4" >
                <div></div>
                <div className="  lg:p-4 rounded-lg banner">
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <span className="text-display lg:whitespace-nowrap">{"Hello I'm"}</span>
                        <span className="text-display font-extrabold  lg:whitespace-nowrap">{"Patarapong Charoenpol."}</span>
                    </div>
                    <div className="flex gap-4 flex-col lg:flex-row">
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
                        <span className="text-p2 text-zinc-500 fadeout">{"My dedication to developing high-quality software and incoming future fields is the qualification"}</span>
                        <br />
                        <span className="text-p2 text-zinc-500 fadeout">{"of a Full Stack programmer with sufficient experience to make your project a star."}</span>
                        <br />
                    </div>
                </div>
                <div className="flex gap-6 w-fit lg:translate-x-[14rem]">
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
            <div className="">
            <Image className="image xl:!w-[700px] lg:!w-[500px] !w-[400px] duration-500 h-auto  " src="/boys.svg" alt="boy" width={400} height={0} />

            </div>

            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        </div>
    )

}

