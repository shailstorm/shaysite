import Link from "next/link";
import Image from "next/image";
import SparkleSwitcher from "@/utils/components/SparkleSwitcher";

export default function Footer ({ className = "" }: { className?: string }) {
    return (
        <div className="flex flex-col mt-auto self-end">
            
            <footer className={`flex flex-row mt-20 mb-2 space-x-2 self-end ${className}`}>
                <Link
                    href="https://github.com/shailstorm"
                    target="_blank">
                    <Image className="opacity-30 hover:opacity-60 transition" alt="github" src="/logos/github.svg" width={20} height={20} />
                </Link>

                <Link
                    href="https://linkedin.com/in/shayleexie"
                    target="_blank">
                    <Image className="opacity-30 hover:opacity-60 transition" alt="linkedin" src="/logos/linkedin-svgrepo-com.svg" width={20} height={20} />
                </Link>

                <Link
                    href="mailto:sx102@wellesley.edu">
                    <Image className="opacity-30 hover:opacity-60 transition" alt="email" src="/logos/email-mail-svgrepo-com.svg" width={20} height={20} />
                </Link>
            </footer>

            <SparkleSwitcher />
        </div>
    );

}
