import Link from "next/link";
import Image from "next/image";

export default function Footer () {
    return (
        <footer className="flex flex-row space-x-2 mb-10 absolute bottom-0 left-20">
            <Link
                href="https://github.com/shailstorm"
                target="_blank">
                <Image className="opacity-30" alt="github" src="/logos/github.svg" width={20} height={20} />
            </Link>

            <Link
                href="https://twitter.com/nullspacing"
                target="_blank">
                <Image className="opacity-30" alt="twitter" src="/logos/twitter.svg" width={20} height={20} />
            </Link>

            <Link
                href="https://linkedin.com/in/shayleexie"
                target="_blank">
                <Image className="opacity-30" alt="linkedin" src="/logos/linkedin.svg" width={20} height={20} />
            </Link>
        </footer>
    );

}
