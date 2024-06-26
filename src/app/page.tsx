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
          <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert ${GeistSans.className}`}> I'm a programmer with a strong passion for competitive programming, web development, machine learning, and cybersecurity. Since starting my career in 2019, I have been committed to continuous learning and growth.</p>
          <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert ${GeistSans.className}`}>
            Currently, I am freelancing as a web developer, data analyst, and few other things. I am a student at <a href="https://www.itb.ac.id/" target="_blank" className="text-blue-500 underline">Institut Teknologi Bandung</a>, majoring in Informatics Engineering.
          </p>
          {/* <div className="mt-5">
            <a href="/muhammadakfz_CV.pdf" download className="bg-blue-700 text-white text-small font-semibold px-4 py-2 rounded-md">Download CV</a>
          </div> */}

          <h2 className={`text-2xl mt-10 mb-4 antialiased font-medium tracking-tight ${GeistSans.className}`}>My Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="p-4 bg-indigo-600 rounded-md">
              <h3 className={`text-xl font-medium ${GeistSans.className}`}>Web Development</h3>
              <p className={`text-lg ${GeistSans.className}`}>React, Next.js, TailwindCSS, Node.js, Express.js, MongoDB, PostgreSQL</p>
            </div>
            <div className="p-4 bg-indigo-600 rounded-md">
              <h3 className={`text-xl font-medium ${GeistSans.className}`}>Machine Learning</h3>
              <p className={`text-lg ${GeistSans.className}`}>Python, TensorFlow, Keras, Scikit-learn, Pandas, Numpy</p>
            </div>
            <div className="p-4 bg-indigo-600 rounded-md">
              <h3 className={`text-xl font-medium ${GeistSans.className}`}>Game Development</h3>
              <p className={`text-lg ${GeistSans.className}`}>Unity, C#, C++</p>
            </div>
          </div>
        </main>
      </body>
    </>
  )
}