'use client'

import React, { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js'
import styles from "./styles/Home.module.css";
import Image from 'next/image'

export default function Home() {
  const welcomeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  useEffect(() => {
    if (welcomeRef.current) {
      const typed = new Typed(welcomeRef.current, {
        strings: ["もしもし!", "Hello World!👋", "I am Fahrur"],
        typeSpeed: 150,
        backSpeed: 200,
        loop: true
      })

      return () => {
        typed.destroy()
      }
    }
  }, [welcomeRef])


  return (
    <>
      <title>Home</title>
      <div id="muhammadakfz" className={styles.page} style={{ scrollBehavior: 'smooth' }}>
        <div className={styles.container} data-aos="zoom-in-up">
          <div className={styles.welcome}>
            <span ref={welcomeRef} className="welcome">
            </span>
          </div>
          <h1 className={styles.description}>
            <text className='font-bold'>Competitive Programming Enthusiast</text>, <text className='font-bold'>Non-stop learner!</text> and <text className='font-bold'>More</text>
          </h1>
        </div>
      </div>
      <div id="about" className="h-[100vh] flex justify-center items-center">
        <div className='flex flex-row place-content-center content-center place-items-center'>
          <Image src="/pp.jpg" alt="Picture of the author" width={400} height={400} className='rounded-full border-[20px] border-solid border-white drop-shadow-2xl basis-1/4 rounded-full justify-end' />
          <div className='flex flex-col pl-[50px]'>
            <h1 className='font-semibold text-4xl'>About Me👨‍💻</h1>
            <p className='pt-[50px] max-w-[600px]'>My name is Muhammad Akhyar Fahrurrozi, usually called Fahrur, I am a programmer who started my career since 2019. As a graduate of Dicoding Academy, I have a deep interest in competitive programming, web development, machine learning, and hacking. I have studied a lot of innovative web application development and developed intelligent machine learning models. Although I have achieved a lot, I realize that I still have a lot to learn. With dedication and passion for continuous improvement, I always try to give my best contribution in every project I work on.</p>
          </div>
        </div>
      </div>
    </>
  )
}