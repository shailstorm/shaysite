import Link from "next/link";


export default function ProjectsPage() {
    return (
        <section className="flex flex-row ">

            <div className="flex flex-col">

                <ul>

                <li>
                    <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">lisp interpreter - 2025 ↱ </a>
                </li>

                <li>
                    <Link href="projects/stars-circles-font">dynamic font - 2025 </Link>
                </li>

                <li>
                    <a href="https://github.com/shailstorm/minesweeper" target="_blank" rel="noopener"> n-D minesweeper - 2022 ↱ </a>
                </li>                    

                <li>
                    memory - 2024
                </li>

                <li>
                    sat solver - 2022
                </li>

                </ul>
                
            </div>
        
        </section>
    )

}