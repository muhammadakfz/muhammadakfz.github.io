'use client'

import React, { use, useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/globals.css"
import { GeistSans } from 'geist/font/sans';

const SocialMediaButton = ({ url, icon, altText, className }: { url: string, icon: string, altText: string, className: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-media-button">
      <img src={icon} alt={altText} className={`icon ${className}`} />
    </a>
  );
};

// Example usage of SocialMediaButton
const SocialMediaLinks = () => {
  return (
    <div className="social-media-links mt-10 flex flex-grid">
      <SocialMediaButton
        url="https://www.instagram.com/muhammadakfz"
        icon="/instagram.png"
        altText="Instagram"
        className={"w-8 h-8 mr-5"}
      />
      <SocialMediaButton
        url="https://x.com/mxddoofzx"
        icon="/x.png"
        altText="X"
        className={"w-7 h-7 mr-5"}
      />
      <SocialMediaButton
        url="https://github.com/muhammadakfz"
        icon="/github.png"
        altText="Github"
        className={"w-8 h-8"}
      />
      <SocialMediaButton
        url='https://www.linkedin.com/in/muhammadakfz/'
        icon='/linkedin.png'
        altText='LinkedIn'
        className='w-8 h-8 ml-5'
      />
    </div>
  );
};


export default function Home() {
  return (
    <>
      <title>Home | muhammadakfz✌️</title>
      <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}`}>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
          <h1 className={`text-2xl mb-10 antialiased font-medium tracking-tight ${GeistSans.className}`}>Hi! l am Fahrur <span className="wave">👋</span></h1>
          <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert ${GeistSans.className}`}>
            Hello everyone, I'm Fahrur, a physics student at the University of Indonesia. I'm passionate about the intersection of physics and technology and strive to create innovative solutions. Through self-learning, I'm eager to contribute to projects that combine my passions.  I am committed to learning and growing in this field.
          </p>
          {/* <div className="mt-5">
            <a href="/muhammadakfz_CV.pdf" download className="bg-blue-700 text-white text-small font-semibold px-4 py-2 rounded-md">Download CV</a>
          </div> */}

          <SocialMediaLinks />

          <div className="mt-10">
            <a href="/about" className="bg-black text-white text-small font-semibold px-4 py-3 rounded-md btn">learn more</a>
          </div>

          
        </main>
      </body>
    </>
  )
}