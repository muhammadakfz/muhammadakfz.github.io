'use client'

import React, { use, useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/globals.css"
import "./styles/font.css"
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
      <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto `}>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TQC40TBS0H"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQC40TBS0H');
          `,
        }} />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
          <h1 className={`text-2xl mb-10 antialiased font-medium tracking-tight CourierPrime font-semibold`}>Hi! l am Fahrur <span className="wave">👋</span></h1>
          <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert CourierPrime `}>
            I'm a frontend developer and programmer, currently an undergraduate Physics student at the <a className='text-blue-700 hover:text-blue-900' href='https://www.ui.ac.id/'>University of Indonesia</a>. With my diverse experience, I am eager to contribute to projects that integrate my passions for technology and science. I am dedicated to continuous learning and growth in this field.
          </p>
          {/* <div className="mt-5">
            <a href="/muhammadakfz_CV.pdf" download className="bg-blue-700 text-white text-small font-semibold px-4 py-2 rounded-md">Download CV</a>
          </div> */}

          {/* <SocialMediaLinks /> */}

          <div className="mt-10">
            <a href="/about" className="bg-black text-white text-small font-semibold px-4 py-3 CourierPrime rounded-md btn">learn more</a>
          </div>

          <div className="mt-10">
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-4 text-right CourierPrime">My Skills__</h2>
            <p className="text-lg prose prose-neutral dark:prose-invert text-right CourierPrime">
              I have experience with a variety of technologies, including React, Next.js, TypeScript, and Tailwind CSS. I am also familiar with Python, Java, and C++.
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="mt-10 text-lg font-semibold mt-4 CourierPrime">Software / Tools</h4>
                <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5 CourierPrime">
                  <li>Figma</li>
                  <li>Unity</li>
                  <li>VS Code</li>
                  <li>Google Colab</li>
                  <li>Git</li>
                  <li>Android Studio</li>
                </ul>
              </div>

              <div>
                <h4 className="mt-10 text-lg font-semibold mt-4 CourierPrime">Languages</h4>
                <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5 CourierPrime">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C++</li>
                  <li>C#</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-10">
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-4 CourierPrime">Projects__</h2>
            <p className="text-lg prose prose-neutral dark:prose-invert CourierPrime">
              Here are some of my recent projects. You can find more on my <a className='text-blue-700 hover:text-blue-900' href='' target='_blank'>GitHub</a>.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="mt-10 text-lg font-semibold mt-4 CourierPrime"> <a className='text-blue-700 hover:text-blue-900' href='https://github.com/muhammadakfz/Algorithm-Adventures'>Algorithm-Adventures</a></h4>
                <p className="mt-5 prose prose-neutral dark:prose-invert CourierPrime">
                  My collection of solutions for various problem sets that I have worked on, such as Codeforces, AtCoder, Kattis, TLX, and many more.
                </p>
              </div>

              <div>
                <h4 className="mt-10 text-lg font-semibold mt-4 CourierPrime"> <a className='text-blue-700 hover:text-blue-900' href='https://github.com/muhammadakfz/Al-Qalam-100'>Al Qalam 100</a></h4>
                <p className="mt-5 prose prose-neutral dark:prose-invert CourierPrime">
                  One of Tremicle's game shows inspired by Family 100. If you are interested in making a game like Family 100, you can use this repository as a reference or contact me if you want the complete source code.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a href="https://github.com/muhammadakfz" className="bg-black text-white text-small font-semibold px-4 py-3 CourierPrime rounded-md btn">view all projects</a>
            </div>
          </section>

          <div className="mt-10">
          </div>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-4 text-right CourierPrime">Contact__</h2>
            <p className="text-lg prose prose-neutral dark:prose-invert text-right CourierPrime">
              I am open to new opportunities, collaborations, and projects. Feel free to reach out to me via email or social media.
            </p>
            <div className="mt-10 text-right">
              <a href="/contact" className="bg-black text-white text-small font-semibold px-4 py-3 CourierPrime rounded-md btn">contact me</a>
            </div>
          </section>

          <section className="mt-20 mb-20">
            <h2 className="text-2xl font-semibold mb-4 CourierPrime">Q&A__</h2>
            <div className="prose prose-neutral dark:prose-invert">
              <h3 className="text-lg font-semibold CourierPrime">Q: Kenapa pilih fisika?</h3>
              <p className="text-lg CourierPrime">A: Gapapa suka aja😭.</p>
            </div>
          </section>

          <div className="mt-20 mb-20">
            <p className="text-xl prose prose-neutral dark:prose-invert text-center CourierPrime">
              “The only way to do great work is to love what you do.” - Steve Jobs
            </p>
          </div>

          <div className="mt-10 mb-5">
            <p className="prose prose-neutral dark:prose-invert text-center CourierPrime">
              ©2024  <a className='text-blue-700 hover:text-blue-900' href='https://www.instagram.com/muhammadakfz/?hl=id'>muhammadakfz</a>. All rights reserved.
            </p>
          </div>

        </main>
      </body>
    </>
  )
}