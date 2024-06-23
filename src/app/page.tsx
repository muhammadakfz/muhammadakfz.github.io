'use client'

import React, { use, useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js'
import styles from "./styles/Home.module.css";
import "./styles/globals.css";
import Image from 'next/image'

export default function Home() {

  // text animation
  const textRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["web developer ", "competitive programming ", "machine learning enthusiast "],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <title>muhammadakfz | Hello!</title>
      <body className="max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0"> 
          <h1 className="text-2xl font-medium tracking-tight ">Hi! I am Fahrur <span className="wave">👋</span></h1>
          <p className="text-lg mt-4 prose prose-neutral dark:prose-invert">
            I am a programmer who started my career since 2019. As a graduate of Dicoding Academy, I have a deep interest in competitive programming, web development, machine learning, and hacking.
          </p>
        </main>
      </body>
    </>
  )
}