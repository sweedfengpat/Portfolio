import { gsap } from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";




export const applyAnimations = (myskills: React.MutableRefObject<any>) => {
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


    gsap.from(".experience", {
        duration: 2,
        opacity: 0,
        y: 0,
        x: 250,
        stagger: 0.2,
        ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".experience",
        }
    });

    gsap.to(".experience", {
        duration: 2,
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.2,
        ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".experience",
        }
    });
}