import Link from "next/link";


export default function ProjectsPage() {
    return (
        <section className="flex flex-row ">

            <div className="flex flex-col">

                <ul>

                <li>
                    <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">lisp interpreter</a> - 2025
                </li>

                <li>
                    <a href="https://github.com/shailstorm/minesweeper" target="_blank" rel="noopener">minesweeper in 2-D and n-D</a> - 2024
                </li>
                    
                <li>
                    <Link href="projects/stars-circles-font" target="_blank">dynamic font</Link> - 2025
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