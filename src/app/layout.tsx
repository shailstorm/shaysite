// WRAPS EVERY ROUTE (global layout)
import './globals.css'
import Link from "next/link";
import Nav from "./nav";
import { karla, lora } from '@/fonts';
import Footer from './footer';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className='flex flex-col justify-center items-center text-[10pt]'>
          <div className="flex flex-col w-full h-screen max-w-xl pl-6 pr-6 pt-7 relative">

            <header className="bg-white/82 sticky z-10 top-0">
              <div className="" >
                <div className='flex justify-between items-center mt-6 mb-1'>
                  <Link href={"/"} className={lora.className + " text-[#6f74ff] font-semibold"}><i>Shaylee Xie</i></Link>
                  <Nav className={karla.className}/>
                </div>
              </div>
            </header>

            <main className="mt-20">
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

