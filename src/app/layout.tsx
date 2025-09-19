// WRAPS EVERY ROUTE (global layout)

"use client"

import './globals.css'
import Link from "next/link";
import Nav from "./nav";
import { karla, lora } from '@/fonts';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Footer from './footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
        <body className='flex flex-col justify-center items-center text-[10pt]'>

          <div className='fixed top-0 z-10 w-full h-40 mask-vertical-fade backdrop-blur-xl bg-white/60'/>

          <div className="flex flex-col w-full max-w-2xl relative min-h-screen">

            <header className="fixed z-20 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6 pt-6">
              <div className='flex justify-between items-center mt-4 mb-1'>
                <Link href={"/"} className={lora.className + " text-[#6f74ff] font-semibold"}><i>Shaylee Xie</i></Link>
                <Nav className={karla.className}/>
              </div>
            </header>

            <main className="mt-20 pl-6 pr-6 pt-20">
              <div className={karla.className + " flex flex-col"}>
                  {children}
              </div>
            </main>

            <Footer />

          </div>

        </body>

    </html>
  );
}

