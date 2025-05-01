// WRAPS EVERY ROUTE (global layout)
import './globals.css'
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";
import { Inconsolata, Libre_Barcode_128_Text, DotGothic16 } from "next/font/google";
import { dot } from 'node:test/reporters';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inconsolata',
});

const librabarcode = Libre_Barcode_128_Text({
  subsets: ['latin'],
  weight: '400',
});

const dotgothic = DotGothic16({
  subsets: ['latin'],
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex-col">
          <div className="flex flex-col p-20 mt-15 justify-between">

            <div className={librabarcode.className + " flex justify-end text-4xl"}>
              <Link href={"/"} className={librabarcode.className + " flex justify-end text-4xl"}>shaylee xie</Link>
            </div>

            <div className="flex flex-row">
            
              <div className={dotgothic.className + " flex flex-col w-48 mt-19 flex-shrink-0"}> {/* LEFT COL */}
                <Nav/>
              </div>
              
              <div className="flex flex-col"> {/* MIDDLE COL */}
                <main className={inconsolata.className + " flex flex-col  mt-20"}>
                  {children}
                </main>
              </div>

            </div>

          </div>
        </div>

      </body>
    </html>
  );
}

