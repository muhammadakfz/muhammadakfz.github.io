'use client'

import React, { use, useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/globals.css"
import { GeistSans } from 'geist/font/sans';


export default function Home() {


  return (
    <>
      <title>muhammadakfz✌️</title>
      <body className={'max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}'}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
          <h1 className={`text-2xl mb-10 antialiased font-medium tracking-tight ${GeistSans.className}`}>Hi! l am Fahrur <span className="wave">👋</span></h1>
          <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert ${GeistSans.className}`}>
            I'm a programmer with a strong passion for competitive programming, web development, machine learning, and cybersecurity. Since starting my career in 2019, I have been committed to continuous learning and growth.
          </p>
        </main>
      </body>
    </>
  )
}