// LAYOUT FOR ALL BLOG POSTS; all pages in this route segment can share the same headings, sidebars, etc
import React from "react";

export default function BlogLayout({ children, }: { children: React.ReactNode }) // ensure children is property of type React.ReactNode 
{
    return (
        <section>
            { children }
        </section>
    );
}
