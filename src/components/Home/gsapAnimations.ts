// gsapAnimations.js
import { gsap } from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const applyAnimations = (containers: React.MutableRefObject<any>) => {
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
};
