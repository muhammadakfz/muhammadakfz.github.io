import React from 'react'

import { GeistSans } from 'geist/font/sans';

export default function Dashboard() {
  return (
    
    <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}`}>
        <title>About Me</title>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">

        <h1 className={`text-2xl antialiased font-medium tracking-tight ${GeistSans.className}`}>About Me 👨‍💻</h1>
        {/* <img src="/pp.jpg" alt="Fahrur" className="rounded-full h-40 w-40 shadow-lg"/> */}

        <div className="border-t-2 border-gray-100 mb-10 my-5"></div>

        <p className={`text-lg mt-4 prose prose-neutral dark:prose-invert ${GeistSans.className}`}>
        Muhammad Akhyar Fahrurrozi, known as Fahrur, is a dedicated software engineer with a strong passion for competitive programming, web development, machine learning, and cybersecurity. Since embarking on his career in 2019, Fahrur has been committed to continuous learning and growth. As a creative mind, Fahrur loves sharing ideas, opinions, and talents with others. He aims to inspire others to chase their passions and dreams through his work and contributions to the tech community. Creating unique and impactful solutions is always a priority, while staying true to oneself. You can explore Fahrur's world by viewing his projects, checking out recent blog posts, or connecting on one of his social media platforms.
        </p>


        </main>
      </body>
  )
}

