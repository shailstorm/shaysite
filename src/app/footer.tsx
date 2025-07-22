import Link from "next/link";
import Image from "next/image";

export default function Footer ({ className = "" }: { className?: string }) {
    return (
        <footer className={`fixed bottom-2 right-6 flex flex-row space-x-2 mb-10 ${className}`}>
            <Link
                href="https://github.com/shailstorm"
                target="_blank">
                <Image className="opacity-30" alt="github" src="/logos/github.svg" width={20} height={20} />
            </Link>

            <Link
                href="https://linkedin.com/in/shayleexie"
                target="_blank">
                <Image className="opacity-30" alt="linkedin" src="/logos/linkedin.svg" width={20} height={20} />
            </Link>
        </footer>
    );

}
