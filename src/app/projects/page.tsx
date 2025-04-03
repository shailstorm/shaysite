import Link from "next/link";
import Nav from "../nav";


export default function ProjectsIndexPage() {
    return (
        <section>
            <Nav></Nav>
            <h1>projects</h1>
            
            <ul>

                {/*
                 a tag for external links, Link for internal links ? 
                 http://reddit.com/r/nextjs/comments/173p6bq/is_there_any_case_where_we_should_use_a_instead/?rdt=64467
                 */}

                <li>
                    <a href="https://github.com/shailstorm/minesweeper" target="_blank" rel="noopener">minesweeper (2-D and n-D)</a> [MIT 6.1010] 2024
                </li>
                    
                <li>
                    <Link href="/projects/stars-circles-font" target="_blank">stars to circles font</Link> 2025
                </li>

                <li>
                    memory (MIT 6.1020)
                </li>

                <li>
                    <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">lisp interpreter</a> 2025
                </li>
                
                <li>
                    sat solver (MIT 6.1010)
                </li>

            </ul>
            

            


        </section>
    )

}