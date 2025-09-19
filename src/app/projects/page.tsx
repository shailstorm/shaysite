import Link from "next/link"
import Image from "next/image"

export default function ProjectsPage() {
    return (
            <div className="flex flex-col space-y-24">

                {/* <h1 className="text-gray-500 font-light font-SF-pro">Design
                    <div className="w-full border-b-[0.99px] border-line border-b-gray-300 mt-1"></div>
                </h1> */}

                <div className="project">
                    <div className="project-heading">
                        <h1 className="project-title">
                            <Link href="projects/swipe/">Swipe</Link>
                        </h1>

                        <div className="project-tag">
                            Mobile App Design
                        </div>
                    </div>
                    <div className="project-description">
                        <div className="description">
                            <p className="">Mid-fi mockup for a React Native app I&apos;m building for The Recurse Center.</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• Figma</p>
                            <p>• Adobe Photoshop</p>
                            <p>• Information Architecture</p>
                        </div>
                    </div>
                    <Link 
                        href="projects/swipe/" 
                        className="project-thumbnail image p-8">
                        <div className="flex-col">
                            <Image
                                src={"/swipe-mockup/login.png"}
                                alt={"login"}
                                style={{ maxWidth: "90%", padding: 10, marginLeft: "auto", marginRight:"auto" }}
                                width={300}
                                height={300} />
                        </div>
        
                        <div className="flex-col">
                            <Image
                                src={"/swipe-mockup/feed swiping.png"}
                                alt={"feed swiping"}
                                style={{ maxWidth: "90%", padding: 10 }}
                                width={300}
                                height={300} />
                        </div>
        
                        <div className="flex-col">
                            <Image
                                src={"/swipe-mockup/all projects.png"}
                                alt={"all projects"}
                                style={{ maxWidth: "90%", padding: 10 }}
                                width={300}
                                height={300} />
                        </div>
                    </Link>
                </div>


                {/* <h1 className="text-gray-500 mt-14 font-light font-sf-pro">Code
                    <div className="w-full border-b-[0.99px] border-line border-b-gray-300 mt-1"></div>
                </h1> */}
                
                <div className="project">
                    <div className="project-heading">
                        <h1 className="project-title">
                            <a href="https://github.com/shailstorm/sat-sudoku" target="_blank" rel="noopener">Sudoku</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>

                        <div className="project-tag">
                            App Development
                        </div>
                    </div>

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

                    <Link 
                        href="https://github.com/shailstorm/sat-sudoku"
                        target="_blank"
                        rel="noopener"
                        className="project-thumbnail video">
                        <video
                            autoPlay
                            loop
                            playsInline
                            webkit-playsinline="true"
                        >
                            <source src="/project-thumbnails/sudoku-demo.mp4" type="video/mp4"/>
                            your browser does not support the video format.
                        </video>
                    </Link>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}

                <div className="flex flex-col gap-[8px]">
                    <div className="project-heading">
                        <h1 className="project-title">
                            <a href=" https://cysabi.github.io/arrhythmia/" target="_blank" rel="noopener">Arrhythmia</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>

                        <div className="project-tag">
                            Game Development
                        </div>
                    </div>

                    <div className="project-description">
                        <div className="description">
                            <p>PvP tilemap rhythm game. I built this with friends at The Recurse Center! Game engine is React.js. . .</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            <p>• React.js</p>
                            <p>• TailwindCSS</p>
                            <p>• Distributed Systems</p>
                            <p>• Art Assets</p>
                        </div>
                    </div>

                    <Link 
                        href="https://cysabi.github.io/arrhythmia/"
                        target="_blank"
                        rel="noopener"
                        className="project-thumbnail video">
                        <video
                            autoPlay
                            loop
                            playsInline
                            webkit-playsinline="true"
                        >
                            <source src="/project-thumbnails/arrhythmia.mp4" type="video/mp4"/>
                            your browser does not support the video format.
                        </video>
                    </Link>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="project">

                    <div className="project-heading">
                        <h1 className="project-title">
                            <Link href="https://github.com/shailstorm/dynamic-font">Dynamic Font</Link>
                        </h1>

                        <div className="project-tag">
                            p5 shenanigans
                        </div>
                    </div>

                    <div className="project-description">
                        <div className="description">
                            <p>Your mouse movement determines the size (x-axis) and shape (y-axis).</p>
                        </div>
                        <div className="grow"></div>
                        <div className="tools">
                            {/* <p>• p5.js</p> */}
                        </div>
                    </div>
                    
                    <div className="project-thumbnail w-full max-w-[800px] aspect-video px-12 pt-12 pb-0 !bg-black">
                        <iframe
                            className="w-full h-full border-0"
                            src="/stars-circles-font/index.html"
                            title="stars and circles"
                            allowFullScreen
                        />
                    </div>
                </div>
                {/* <div className="w-full border-b-1 border-dotted border-b-gray-300"></div> */}


                <div className="project">
                    <div className="project-heading">
                        <h1 className="project-title">
                            <a href="https://github.com/shailstorm/scheme-interpreter" target="_blank" rel="noopener">Lisp Interpreter</a><span className="text-[#BEBDC9] font-normal"> &#8599;</span>
                        </h1>

                        <div className="project-tag">
                            Programming Languages
                        </div>
                    </div>

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
                

                <div className="flex flex-col gap-[12px]">
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