import Link from "next/link"

export default function ProjectsPage() {
    return (
        
            <div className="flex flex-col space-y-12">

                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href="https://github.com/shailstorm/sudoku" target="_blank" rel="noopener">Sudoku</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p>(In progress) SAT solver logic operational, currently building out UI.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Python</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">Lisp Interpreter</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p className="">Turing complete Python REPL interpreter for Scheme.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Python</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href="https://github.com/shailstorm/shaysite" target="_blank" rel="noopener">Shaysite</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p className="">This ~mobile-first~ website!</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Next.js</p>
                            <p>• Typescript</p>
                            <p>• CSS/HTML</p>
                            <p>• MDX</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}
                

                <div className="flex flex-col">
                    <span>
                        <h1>
                            <Link href="projects/stars-circles-font">Dynamic Font</Link>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p className="">Interactive font.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• p5.js</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="flex flex-col">
                    <span>
                        <h1>
                            <Link href="projects/swipe/">Swipe</Link>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p className="">Mid-fi mockup for a React Native app I&apos;m building for The Recurse Center.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Figma</p>
                            <p>• Adobe Photoshop </p>
                            <p>• Information Architecture</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href="https://github.com/shailstorm/minesweeper" target="_blank" rel="noopener">n-d Minesweeper</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p className="">Minesweeper game with option to play on a 2, 3, 4, ... , or n dimensional board.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Python</p>
                            <p>• CSS/HTML</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}

            </div>

        
    )
}