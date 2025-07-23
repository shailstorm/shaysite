"use client"; // needed to use hooks like usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({className = ""}: {className?: string}) {
  const pathname = usePathname();

  const links = [
    { label: "About", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Art", href: "/art" },
    { label: "Writing", href: "/writing" },
  ];

  return (
    <nav className={`flex flex-row space-x-3 ${className}`}>
      {links.map(({ label, href }) => {
        const isActive = ( pathname === href || pathname.startsWith(href + "/") );
        return (
          <Link
            key={href}
            href={href}
            className={`transition ${
              isActive ? "text-violet-300" : "text-gray-300"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
