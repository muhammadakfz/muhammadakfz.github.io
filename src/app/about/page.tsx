import React from 'react';
import "../styles/font.css";


import { GeistSans } from 'geist/font/sans';

const SocialMediaButton = ({ url, icon, altText, className }: { url: string, icon: string, altText: string, className: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-media-button">
      <img src={icon} alt={altText} className={`icon ${className}`} />
    </a>
  );
};

export default function Dashboard() {

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

  return (

    <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto CourierPrime`}>
      <title>About Me</title>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">

        <h1 className={`text-2xl antialiased font-medium tracking-tight font-semibold`}>About Am I?</h1>


        <div className="social-media-links grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <img src="/pp.jpg" alt="Profile Picture" className="border-8 border-gray-100 w-70 h-70 mt-5" />
          <p className="mt-5 text-lg">
            Hello everyone, my name is Muhammad Akhyar Fahrurrozi. Usually called Fahrur. I am a student at the University of Indonesia majoring in Physics. With my diverse experience, I am eager to contribute to projects that integrate my passions for technology and science. I am dedicated to continuous learning and growth in this field.
          </p>
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-4 text-right CourierPrime">🧠 My Skills__</h2>
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

        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-4 ">🎓 My Education__</h2>
          <p className="text-lg prose prose-neutral dark:prose-invert">
            I am currently an undergraduate student at the University of Indonesia, majoring in Physics.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="mt-10 text-lg font-semibold mt-4">Undergraduate</h4>
              <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
                <li>University of Indonesia</li>
                <li>Physics</li>
                <li>2024 - Present</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mt-10 text-lg font-semibold mt-4">High School</h4>
            <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
              <li>MAN 2 Kota Malang</li>
              <li>Science</li>
              <li>2021 - 2024</li>
            </ul>
          </div>

          <div>
            <h4 className="mt-10 text-lg font-semibold mt-4">Junior High School</h4>
            <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
              <li>SMP Nusantara Pronojiwo</li>
              <li>2018 - 2021</li>
            </ul>
          </div>

          <div>
            <h4 className="mt-10 text-lg font-semibold mt-4">Elementary School</h4>
            <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
              <li>SD Negeri Oro Oro Ombo 1</li>
              <li>2012 - 2018</li>
            </ul>
          </div>

        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold mb-4 text-right"> 🌐 Languages__</h2>
          <p className="text-lg prose prose-neutral dark:prose-invert text-right">
            I am fluent in Indonesian and English.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="mt-10 text-lg font-semibold mt-4">Indonesian</h4>
              <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
                <li>Native</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mt-10 text-lg font-semibold mt-4">English</h4>
            <ul className="mt-5 prose prose-neutral dark:prose-invert list-disc ml-5">
              <li>Intermediate</li>
            </ul>
          </div>
        </section>

        <div className="flex justify-center mt-10">
          <SocialMediaLinks />
        </div>

        <div className="mt-10 mb-5">
          <p className="prose prose-neutral dark:prose-invert text-center CourierPrime">
            ©2024  <a className='text-blue-700 hover:text-blue-900' href='https://www.instagram.com/muhammadakfz/?hl=id'>muhammadakfz</a>. All rights reserved.
          </p>
        </div>
      </main>
    </body>
  )
}