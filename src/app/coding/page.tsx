import Link from "next/link";


export default function CodingPage() {
    return (
        <section className="flex flex-row ">

            <div className="flex flex-col">

                <ul>

                <li>
                    <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">Lisp Interpreter - 2025 ↱ </a>
                </li>

                <li>
                    <Link href="coding/stars-circles-font">Dynamic Font - 2025 </Link>
                </li>

                <li>
                    <a href="https://github.com/shailstorm/minesweeper" target="_blank" rel="noopener"> n-D Minesweeper - 2022 ↱ </a>
                </li>                    

                <li>
                    Memory - 2024
                </li>

                <li>
                    Sat Solver - 2022
                </li>

                </ul>
                
            </div>
        
        </section>
    )

}