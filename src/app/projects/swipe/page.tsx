import Image from "next/image";

export default function SwipeMockupPage() {
    return (
        <article className="design-project">
            <h1 className= { "" }>Swipe</h1>
            <time dateTime="2025-08">July 2025 · 2 weeks</time>
            <div className="mb-12"></div>
            
            {/* <hr className="border-t-1 border-t-gray-200 mt-6 mb-8" /> */}

            <h2>Problem</h2>
            <p>
                Members and alumni of The Recurse Center are often looking to
                pair together on coding projects or challenges. 
                This is an integral part of a batch at Recurse.
            </p>
            <br />

            <h2>Recurser Needs</h2>
            <ul className="">
                <li><b>Share</b> what they are working on.</li>
                <li><b>Exposure to and information about</b> what other Recursers are working on.</li>
                <li><b>Track progress</b> of projects that excite them.</li>
            </ul>
            <br />

            <h2>Current Method</h2>

            <p>
                Projects are shared in the Zulip messaging platform. Each project lives in a separate discussion thread.
            </p>

            <ul>
                <li>
                    There are a lot of conversations to sift through, so <b>projects get lost</b>.
                </li>
               
                <li>
                    There is no standard to follow when uploading or finding information about a project.{" "}
                    <b>Important details get left out</b>, or buried in paragraphs.
                </li>
            </ul>

            <br />

            <h2>Prototyping</h2>
            <p>
                When considering a project, Recursers want to know:
            </p>
            <ul>
                <li>Languages and tech stack</li>
                <li>The project&apos;s goal and where it currently stands in relation to the goal.</li>
            </ul>


            <div className="m-6 relative w-screen left-1/2 -mx-[50vw]">
                <div className="max-w-[85vw] md:max-w-[80vw] lg:max-w-3xl mx-auto overflow-x-auto bg-gray-50 rounded-xl border-1 border-gray-100">
                    <table className="m-2 mb-4 mx-auto border-separate border-spacing-x-8 border-spacing-y-8 w-full min-w-[600px] max-w-[800px] text-[#8E95A6]">
                        <thead className="">
                            <tr className="whitespace-nowrap text-center">
                                <th className="">Pain Point</th>
                                <th className="">Explanation</th>
                                <th className="">Solution</th>
                            </tr>
                        </thead>
                        <tbody className="text-[#7b8598] align-top text-left">
                            <tr>
                                <td className="align-top text-center">Zulip Integration</td>
                                <td>The Recurse Center leverages Zulip as its communication hub for projects, which we want to maintain.</td>
                                <td>Create a Zulip Swipe bot that makes each user a Swipe channel on Zulip and manages subscriptions based on saved projects in their Swipe user profiles. </td>
                            </tr>

                            <tr>
                                <td className="align-top text-center">Clutter</td>
                                <td>Inactive projects cause clutter.</td>
                                <td>Project owners set expiration dates, upon which the projects are removed from the stack.</td>
                            </tr>

                            <tr>
                                <td className="align-top text-center">Archive Access</td>
                                <td>Users may want to see older projects.</td>
                                <td>Users can filter for or against expired projects in an &quot;All Projects&quot; Tab.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="flex flex-col items-center w-full">

                <p className="mt-6">
                    The app was inspired by Tinder&apos;s swipe mechanism, but rejecting a Recurser&apos;s project feels unsupportive.
                </p>

                <div className="flex flex-col justify-center">
                    <div className="flex flex-row justify-center space-x-4 sm:space-x-8 mt-8 mb-8">
                        <Image
                            src={"/swipe-mockup/feed nonliked.png"}
                            alt={"feed nonliked"}
                            style={{ maxWidth: "30%"}}
                            width={300}
                            height={300} />

                        <Image
                            src={"/swipe-mockup/feed liked.png"}
                            alt={"feed liked"}
                            style={{ maxWidth: "30%"}}
                            width={300}
                            height={300} />

                        <Image
                            src={"/swipe-mockup/feed swiping.png"}
                            alt={"feed swiping"}
                            style={{ maxWidth: "30%"}}
                            width={300}
                            height={300} />
                    </div>

                    <p className="content-center">
                        Instead of swiping in a specific direction to reject, users tap the heart to save projects, 
                        and swipe the card off the screen in any direction to see the next project. No rejection necessary!
                    </p>
                </div>
            </div>


            <div className="flex flex-row items-center w-full justify-center mt-10">
                <div className="flex flex-row justify-center space-x-4 sm:space-x-8">
                    <video 
                        autoPlay
                        loop
                        playsInline
                        className="pointer-events-none max-w-50">
                        <source src="/swipe-mockup/select_project.webm" type="video/webm"/>
                        <source src="/swipe-mockup/select_project.webm" type="video/quicktime"/>
                    </video>

                </div>

                <p className="content-center p-10">
                    To see a project again or like a project later, go to All Projects.
                </p>
            </div>

            
            <div className="flex flex-row items-center w-full justify-center">
                <p className="content-center p-10">
                    Create a new project under Profile.
                </p>

                <div className="flex flex-row justify-center space-x-4 sm:space-x-8">
                    <video 
                        autoPlay
                        loop
                        playsInline
                        className="pointer-events-none max-w-50">
                        <source src="/swipe-mockup/create_project.webm" type="video/webm"/>
                        <source src="/swipe-mockup/create_project.webm" type="video/quicktime"/>
                    </video>
                </div>
            </div>

            
            <div className="flex flex-row items-center w-full justify-center">
                <div className="flex flex-row justify-center space-x-4 sm:space-x-8">
                    <video 
                        autoPlay
                        loop
                        playsInline
                        className="pointer-events-none max-w-50">
                        <source src="/swipe-mockup/edit_project.webm" type="video/webm"/>
                        <source src="/swipe-mockup/edit_project.webm" type="video/quicktime"/>
                    </video>
                </div>

                <p className="content-center p-10">
                    Edit owned projects under Profile.
                </p>
            </div>





{/* 
            <div className="mt-12 mb-6 relative w-screen left-1/2 -mx-[50vw] overflow-x-hidden">
                <div className="flex flex-rows overflow-x-auto">
                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/login.png"}
                            alt={"login"}
                            style={{ minWidth: "100%", padding: 5 }}
                            width={300}
                            height={300} />
                        <p className="caption text-center">
                            Calls the Recurse authentication API during login.
                        </p>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/feed nonliked.png"}
                            alt={"feed nonliked"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/feed liked.png"}
                            alt={"feed liked"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/feed swiping.png"}
                            alt={"feed swiping"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/all projects.png"}
                            alt={"all projects"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/selected_project.png"}
                            alt={"selected project"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/my projects.png"}
                            alt={"my projects"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/edit or delete project.png"}
                            alt={"edit or delete"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>

                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/edit project card.png"}
                            alt={"edit project"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>
                    
                    <div className="flex-col">
                        <Image
                            src={"/swipe-mockup/create project card.png"}
                            alt={"create project"}
                            // style={{ maxWidth: "30%", height: "30%" }}
                            style={{ padding: 5 }}
                            width={300}
                            height={300} />
                        <div className="caption content-center">
                            Caption
                        </div>
                    </div>
                </div>
            </div> */}

        </article>
    )
}