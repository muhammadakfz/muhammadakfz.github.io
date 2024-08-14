import React from 'react'
import { GeistSans } from 'geist/font/sans';

export default function NotFound() {
  return (

    <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}`}>
    <title>404 | Not Found</title>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">

        <p className={`text-2xl antialiased font-medium tracking-tight ${GeistSans.className}`}>404 | Not Found</p>     

        </main>
      </body>
  )
}
