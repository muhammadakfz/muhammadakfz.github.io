import React from 'react'

import { GeistSans } from 'geist/font/sans';

export default function Contact() {
    return (
        <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}`}>
            <title>Contact Me📧</title>

            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">

                <h1 className={`text-2xl antialiased font-medium tracking-tight ${GeistSans.className}`}>Contact Me📧</h1>
                {/* <img src="/pp.jpg" alt="Fahrur" className="rounded-full h-40 w-40 shadow-lg"/> */}

                <div className="border-t-2 border-gray-100 mb-10 my-5"></div>
                <div className="prose prose-neutral dark:prose-invert">
                    <p className={`text-lg mt-4 ${GeistSans.className}`}> If you have any questions or just want to say hi, feel free to reach out to me via email or social media. I'm always open to new opportunities and collaborations, so don't hesitate to contact me!</p>
                    <p className={`text-lg mt-4 ${GeistSans.className}`}>
                        Email   : <a href="mailto:muhammadakfz@gmail.com" className="text-blue-500">muhammadakfz@gmail.com</a>
                        <br />
                        GitHub  : <a href="https://github.com/muhammadakfz" className="text-blue-500">muhammadakfz</a>
                        <br />
                        Twitter : <a href="https://x.com/mxddoofzx" className="text-blue-500">@muhammadakfz</a>
                        <br />
                        Instagram: <a href="https://www.instagram.com/muhammadakfz/" className="text-blue-500">@muhammadakfz</a>
                    </p>
                    <p className={`text-lg mt-4 ${GeistSans.className}`}>I look forward to hearing from you!😊</p>
                </div>
            </main>
        </body>
    )
}

