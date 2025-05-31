// WRAPS EVERY ROUTE (global layout)
import './globals.css'
import Link from "next/link";
import Nav from "./nav";
import { Inconsolata, Libre_Barcode_128_Text, DotGothic16 } from "next/font/google";

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
          <div className="flex flex-col md:p-20 p-10 mt-15">

            <div>
              <Link href={"/"} className={librabarcode.className + " flex justify-end text-4xl"}>shaylee xie</Link>
            </div>

            <div className="flex md:gap-0 gap-3">
            
              <div className={dotgothic.className + " flex-initial mt-19 md:w-1/4 w-1/3"}>
                <Nav/>
              </div>
              
              <div className="flex flex-col">
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

