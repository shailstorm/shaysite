import Link from "next/link";
import Footer from './footer';


interface NavProps {
    className?: String;
}

export default function Nav({ className = "" }: NavProps) {
    return (
            <div className="flex-col flex text-lg ${className}">
                
                <div className="mb-0.5">
                    <Link href="/">about</Link>
                </div>
                
                <div className="mb-0.5">
                    <Link href="/projects">projects</Link>
                </div>

                <div className="mb-0.5">
                    <Link href="/design">design</Link>
                </div>

                <div className="mb-0.5">
                    <Link href="/art">art</Link>
                </div>

                <div className="mb-0.5">
                    <Link href="/writing">writing</Link>
                </div>


                {/* <Link href="/books">books</Link> */}


                <Footer />

            </div>      
    );
}