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


        <p>Under Construction</p>


        </main>
      </body>
  )
}

