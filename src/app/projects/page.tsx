import Link from "next/link"

export default function ProjectsPage() {
    return (
            <div className="flex flex-col space-y-11">

                <h1 className="text-gray-500 font-light font-SF-pro">Design
                    <div className="w-full border-b-[0.99px] border-line border-b-gray-300 mt-1"></div>
                </h1>

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
                            <p>• HTML</p>
                            <p>• TailwindCSS</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}
                

                <h1 className="text-gray-500 mt-14 font-light font-sf-pro">Code
                    <div className="w-full border-b-[0.99px] border-line border-b-gray-300 mt-1"></div>
                </h1>
                
                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href="https://github.com/shailstorm/sat-sudoku" target="_blank" rel="noopener">Sudoku</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p>Sudoku puzzle generator and solver. Uses boolean satisfiability recursive backtracking.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Python</p>
                            <p>• HTML</p>
                            <p>• TailwindCSS</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}

                <div className="flex flex-col">
                    <span>
                        <h1>
                            <a href=" https://cysabi.github.io/arrhythmia/" target="_blank" rel="noopener">Arrhythmia</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>
                    </span>
                    <div className="project-description">
                        <div className="description">
                            <p>PvP tilemap rhythm game. I built this with friends at The Recurse Center! Game engine is React.js. . .</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• React.js</p>
                            <p>• Golang</p>
                            <p>• TailwindCSS</p>
                            <p>• Distributed Systems</p>
                            <p>• Art Assets</p>
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
                            <p>• HTML/CSS</p>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}

            </div>

        
    )
}