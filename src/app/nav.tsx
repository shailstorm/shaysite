"use client"; // needed to use hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({className = ""}: {className?: string}) {
  const pathname = usePathname();

  const links = [
    { label: "Projects", href: "/projects" },
    { label: "Art", href: "/art" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/" },
  ];

  return (
    <nav className={`flex flex-row space-x-3 text-[14px] ${className}`}>
      {links.map(({ label, href }) => {
        const isActive = ( pathname === href || pathname.startsWith(href + "/") );
        return (
          <Link
            key={href}
            href={href}
            className={`transition ${
              isActive ? "text-[#998CF6]" : "text-[#9ca2ad]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
