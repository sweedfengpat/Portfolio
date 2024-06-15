"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react';
import {useMenu} from "../context/menuContext"

const HomePage = dynamic(() => import('@/components/Home'))
const MySkill = dynamic(() => import('@/components/mySkill'))
const Experience = dynamic(() => import('@/components/experience'))
const AboutMe = dynamic(() => import('@/components/aboutMe'))


export default function Home() {

const {menu} = useMenu();
const ScrollDownRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const container = ScrollDownRef.current;
  if (container) {
    const item = container.children[menu] as HTMLElement;
    window.scrollTo({
      top: item.offsetTop,
      behavior: 'smooth',
    });
  }
}
, [menu]);

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between  w-full " ref={ScrollDownRef} >
      <div className="min-h-screen p-6 xl:px-24 xl:pt-56 xl:pb-24">
        <HomePage />
      </div>
      <div className="min-h-screen  p-6 xl:p-24">
        <MySkill />
      </div>
      <div className="min-h-screen  p-6 xl:p-24 bg-black w-full">
        <Experience />
      </div>
      <div className="min-h-screen  p-6 xl:p-24">
        <AboutMe />
      </div>
      
    </main>
    </>
  );
}
