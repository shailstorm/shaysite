import Link from "next/link";
import Footer from './footer';


// interface NavProps {
//     className?: string;
// }

// export default function Nav({  }: NavProps) {
export default function Nav() {
    return (
            <div className="flex flex-row ${className}">
                
                <div className="m-1">
                    <Link href="/">About</Link>
                </div>
                
                <div className="m-1">
                    <Link href="/projects">Code</Link>
                </div>

                <div className="m-1">
                    <Link href="/design">Design</Link>
                </div>

                <div className="m-1">
                    <Link href="/art">Art</Link>
                </div>

                <div className="m-1">
                    <Link href="/writing">Writing</Link>
                </div>

                {/* <div className="mb-1">
                    <Link href="/books">Books</Link>
                </div> */}


            </div>      
    );
}