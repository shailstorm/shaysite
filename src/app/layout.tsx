// WRAPS EVERY ROUTE (global layout)
import './globals.css'
import Link from "next/link";
import Nav from "./nav";
import { Libre_Barcode_128_Text, Inter} from "next/font/google";
import Footer from './footer';

// const inconsolata = Inconsolata({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-inconsolata',
// });

const librabarcode = Libre_Barcode_128_Text({
  subsets: ['latin'],
  weight: '400',
});

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center text-[10pt]'>
          <div className="flex flex-col w-full max-w-xl p-6">
          <header className="sticky top-0 bg-white border-b-violet-400 border-dashed border-b-1">
            <div className='flex justify-between items-center mt-3 mb-2'>
              <Link href={"/"} className={inter.className}>Shaylee Xie</Link>
              <Nav />
            </div>
          </header>

          <main className="flex flex-col mt-10">
            <div className={inter.className + " flex flex-col"}>
                {children}
            </div>
          </main>

          </div>
          
          <Footer />
      </body>

      
    </html>
  );
}

