import Link from "next/link";

export default function Nav() {
    return (
        <header className="flex justify-center mb-8">
        <nav className="flex space-x-6 text-lg">
            <Link href="/">about</Link>
            <br></br>
            <Link href="/books">reading list</Link>
            <br></br>
            <Link href="/projects">projects</Link>
            <br></br>
            <Link href="/art">art</Link>
            {/* <br></br>
            <Link href="/writings">musings</Link> */}
        </nav>
        </header>
    );
}