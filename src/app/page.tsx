'use client'

import React, { use, useEffect, useRef } from 'react'
import 'aos/dist/aos.css';
import "./styles/globals.css"
import "./styles/font.css"
import { GeistSans } from 'geist/font/sans';

const SocialMediaButton = ({ url, icon, altText, className }: { url: string, icon: string, altText: string, className: string }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-gray-400 hover:bg-gray-700">
      <img src={icon} alt={altText} className={`${className}`} />
    </a>
  );
};

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      <SocialMediaButton
        url="https://www.instagram.com/muhammadakfz"
        icon="/instagram.png"
        altText="Instagram"
        className={"w-10 h-10 hover:scale-110 transition-transform"}
      />
      <SocialMediaButton
        url="https://x.com/muhammadakfz"
        icon="/x.png"
        altText="X"
        className={"w-10 h-10 hover:scale-110 transition-transform"}
      />
      <SocialMediaButton
        url="https://github.com/muhammadakfz"
        icon="/github.png"
        altText="Github"
        className={"w-10 h-10 hover:scale-110 transition-transform"}
      />
      <SocialMediaButton
        url='https://www.linkedin.com/in/muhammadakfz/'
        icon='/linkedin.png'
        altText='LinkedIn'
        className='w-10 h-10 hover:scale-110 transition-transform'
      />
    </div>
  );
};

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center mb-6 px-4">
      <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
        <img
          src="/pp.jpeg"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className={`text-3xl font-bold text-white mb-2 text-center ${GeistSans.className}`}>Muhammad Akhyar Fahrurrozi</h1>
      <p className={`text-gray-300 text-center max-w-sm mb-2 leading-relaxed ${GeistSans.className}`}>
        Software Developer & Tech Enthusiast
      </p>
      <p className={`text-sm text-gray-400 text-center max-w-md leading-relaxed ${GeistSans.className}`}>
        Welcome to my digital space! Connect with me through the links below.
      </p>
    </div>
  );
};

const LinkButton = ({ url, title, description, icon }: {
  url: string,
  title: string,
  description?: string,
  icon?: string
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-md bg-white/10 backdrop-blur-md text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-3 mb-3 border border-white/20 hover:border-white/30 group hover:bg-white/20 flex flex-col items-start"
    >
      <div className="flex items-center justify-between w-full">
        {icon && (
          <div className="rounded-lg p-3 transition-transform transform group-hover:scale-105">
            <img src={icon} alt={title} className="w-8 h-8" />
          </div>
        )}
        <div className="flex-1">
          <h3 className={`font-semibold text-white group-hover:text-gray-200 transition-colors ${GeistSans.className}`}>
            {title}
          </h3>
          {description && (
            <p className={`text-sm text-gray-300 group-hover:text-gray-100 transition-colors ${GeistSans.className}`}>
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center w-6">
          <svg
            className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  );
};

const LinksSection = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <LinkButton
        url="https://github.com/muhammadakfz"
        title="GitHub"
        description="Check out my projects and contributions"
        icon="/github.png"
      />
      <LinkButton
        url="https://www.linkedin.com/in/muhammadakfz/"
        title="LinkedIn"
        description="Connect with me professionally"
        icon="/linkedin.png"
      />
      <LinkButton
        url="https://www.instagram.com/muhammadakfz"
        title="Instagram"
        description="Follow my daily updates"
        icon="/instagram.png"
      />
      <LinkButton
        url="https://x.com/mxddoofzx"
        title="X (Twitter)"
        description="Follow me for tech updates"
        icon="/x.png"
      />
      <LinkButton
        url="mailto:your.email@example.com"
        title="Email Me"
        description="Get in touch via email"
        icon="/email.png"
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full text-center mt-8 py-6 rounded-xl shadow-inner">
      <div className="flex flex-col items-center space-y-1">
        <p className={`text-sm text-gray-300 ${GeistSans.className}`}>
          © {new Date().getFullYear()} muhammadakfz. All rights reserved.
        </p>
        <p className={`text-xs text-gray-400 flex items-center gap-1 ${GeistSans.className}`}>
          Built with
          <span className="animate-pulse text-red-400">❤️</span>
          and lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <>
      <title>Home | muhammadakfz✌️</title>
      <body className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 bg-[length:400%_400%] animate-gradient ${GeistSans.className}`}>
        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }
        `}
        </style>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TQC40TBS0H"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQC40TBS0H');
          `,
        }} />
        <main className="min-h-screen max-w-lg mx-auto px-4 py-20">
          <div className="flex flex-col items-center space-y-6 py-100">
            <ProfileSection />
            <LinksSection />
            <Footer />
          </div>
        </main>
      </body>
    </>
  );
}