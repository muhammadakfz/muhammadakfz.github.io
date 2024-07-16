import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./styles/globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menuItem = (url: string, text: string, className?: string) => (
    <div className={className}>
      <Link href={url}>{text}</Link>
    </div>
  );



  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <aside className="-ml-[8px] mt-10 mb-16 tracking-tight">
          <div className="lg:sticky lg:top-20">
            <nav className={`flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative ${GeistSans.className}`} id="nav">
              <div className="flex flex-row space-x-0 pr-10">
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 " href="/">home</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="#work">about</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="https://github.com/muhammadakfz">github</a>
                <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2" href="#contact">contact me</a>
              </div>
            </nav>
          </div>
        </aside>
        {children}
      </body>
    </html>
  );
}