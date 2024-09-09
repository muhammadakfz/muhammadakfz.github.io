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

export default function Contact() {

    const SocialMediaLinks = () => {
        return (
            <div className="social-media-links mt-10 flex flex-grid">
                <SocialMediaButton
                    url="mailto:muhammadakfz@gmail.com"
                    icon="/email.png"
                    altText="Email"
                    className={"w-8 h-8 mr-5"}
                />
                <SocialMediaButton
                    url="wa.me/6281332534009"
                    icon="/wa.png"
                    altText="WhatsApp"
                    className={"w-8 h-8 mr-5"}
                />
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
        <>

            <title>Contact Me📧</title>
            <body className={`max-w-2xl mb-40 md:flex-row mx-4 mt-8 lg:mx-auto CourierPrime`}>

                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <h1 className={`text-2xl antialiased font-medium tracking-tight CourierPrime font-semibold`}>Contact Me📧</h1>
                    {/* <img src="/pp.jpg" alt="Fahrur" className="rounded-full h-40 w-40 shadow-lg"/> */}

                    <div className="border-t-2 border-gray-100 mb-10 my-5"></div>

                    <SocialMediaLinks />
                    <div className="prose prose-neutral dark:prose-invert mt-5">
                        <p className={`text-lg mt-4 CourierPrime`}> If you have any questions or just want to say hi, feel free to reach out to me via email or social media. I'm always open to new opportunities and collaborations, so don't hesitate to contact me!</p>



                        <p className={`text-lg mt-4 CourierPrime`}>I look forward to hearing from you!😊</p>
                    </div>
                </main>
            </body>
        </>
    );
}