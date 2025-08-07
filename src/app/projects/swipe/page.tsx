import Image from "next/image";

export default function SwipeMockupPage() {
    return (
        <article className="design-project">
            <h1 className= { "" }>Swipe</h1>
            <time dateTime="2025-08">July 2025 · 2 weeks</time>
            <div className="mb-10"></div>
        
            <p className="mb-5">
                I designed an app inspired by Tinder for members of 
                {" "}<a href="https://www.recurse.com" target="_blank" rel="noopener">The Recurse Center</a>{" "}
                to share and find projects they want to pair-program on.
            </p>


            <div className="flex flex-row mb-10">
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
            </div>

            <hr className="border-t-1 border-t-gray-200 mt-6 mb-8" />

            
            <div className="mb-10">
                <h2>Problem</h2>
                <p>
                    Members and alumni of The Recurse Center are often looking to
                    pair together on coding projects or challenges. 
                    This is an integral part of a batch at Recurse.
                </p>
            </div>

            <div className="mb-10">
                <h2>Current Solution</h2>
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
            </div>

            <div className="mb-10">
                <h2>Recurser Needs</h2>
                <ul className="mb-5">
                    <li><b>Explore</b> what others are working on.</li>
                    <li><b>Share</b> their own projects.</li>
                    <li><b>Track</b> progress of projects that excite them.</li>
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
                                    <td>The Recurse Center leverages Zulip as its communication hub for projects, which we want to preserve in order to minimize friction and confusion.</td>
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
            </div>

            <div className="mb-10">
                <h2>Interviews</h2>
                <p>
                    I spoke with Recursers about what they look for when considering a project. <br />
                    Recursers want to know:
                </p>
                <ul className="mb-5">
                    <li>Languages and tech stack</li>
                    <li>The project&apos;s goal and where it currently stands in relation to the goal.</li>
                </ul>

            </div>


            <h2>Prototyping</h2>

            <div className="flex flex-col items-center w-full mb-10">
                <p>
                    Project cards are the main component of this app. 
                    I kept true to the most relevant pieces of information that
                    Recursers want to see, in order to avoid clutter and friction.
                    Each card summarizes the project&apos;s 
                    tech stack, goals, and timeline in a way that&apos;s easy for Recursers to parse.
                </p>
            </div>

            <div className="mb-10">
                <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <h2 className="pl-2 pr-2 font-semibold">Explore Projects</h2>
                    {/* <div className="flex-grow border-t border-gray-200"></div> */}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="content-center">The <b>Swipe tab</b> contains the
                        main feed, where Recursers get exposure to projects that others are working on. The swiping mechanism is 
                        an amusing yet efficient way to engage with projects.
                    </p>

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
                        The swipe mechanism is inspired by Tinder, but rejecting a Recurser&apos;s project feels unsupportive. Instead of swiping in a specific direction to reject, users tap the heart to save projects, 
                        and swipe the card off the screen in any direction to see the next project. No rejection necessary.
                    </p>
                </div>
            </div>

            <div className="mb-10">
                <div className="flex flex-col sm:flex-row items-center w-full justify-center mt-5">
                    <div className="flex flex-row justify-center space-x-4 sm:space-x-8">
                        <video 
                            autoPlay
                            loop
                            playsInline
                            webkit-playsinline="true"
                            className="pointer-events-none max-w-50">
                            style="background: transparent;"
                            <source src="/swipe-mockup/select_project.webm" type="video/webm"/>
                            <source src="/swipe-mockup/select_project.webm" type="video/quicktime"/>
                        </video>
                    </div>

                    <p className="text-center p-10">
                        The <b>All Projects tab</b> allows users to find specific projects using search and filters.
                        From here, click on any project to view details and save the card.
                    </p>
                </div>
            </div>


            <div className="mb-20">
                <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <h2 className="pl-2 pr-2 font-semibold">Share Projects</h2>
                    {/* <div className="flex-grow border-t border-gray-200"></div> */}
                </div>

                <p className="mb-8">
                    The <b>Profile tab</b> is where users upload, delete, and edit their own projects.
                </p>

                <div className="flex flex-col sm:flex-row items-center w-full">
                    <div className="flex flex-col w-full md:w-1/2">
                    
                            <div className="self-center sm:self-start mb-20">
                                <video 
                                autoPlay
                                loop
                                playsInline
                                webkit-playsinline="true"
                                className="pointer-events-none max-w-50">
                                style="background: transparent;"
                                    <source src="/swipe-mockup/create_project.webm" type="video/webm"/>
                                    <source src="/swipe-mockup/create_project.webm" type="video/quicktime"/>
                                </video>
                                <h2 className="content-center text-center !text-gray-400 mt-2">
                                    Create card
                                </h2> 
                            </div>

                            <div className="self-center sm:self-start">
                                <video 
                                    autoPlay
                                    loop
                                    playsInline
                                    webkit-playsinline="true"
                                    className="pointer-events-none max-w-50">
                                    style="background: transparent;"
                                    <source src="/swipe-mockup/deleteprojectflow.webm" type="video/webm"/>
                                    <source src="/swipe-mockup/deleteprojectflow.webm" type="video/quicktime"/>
                                </video>
                                <h1 className="content-center text-center !text-gray-400 mt-2">
                                    Delete card
                                </h1> 
                            </div>
                    </div>
                    

                    <div className="flex flex-col w-full sm:w-1/2 self-start">
                            <p className="mt-20 mb-20 text-center">
                                When designing the Create card and Edit card views, I wanted to decrease friction
                                as much as possible specifically for users who have enough information to create and edit projects. 
                            </p>

                            <div className="flex flex-col items-center">
                                <video 
                                    autoPlay
                                    loop
                                    playsInline
                                    webkit-playsinline="true"
                                    className="pointer-events-none max-w-50">
                                    style="background: transparent;"
                                    <source src="/swipe-mockup/editdraftflow.webm" type="video/webm"/>
                                    <source src="/swipe-mockup/editdraftflow.webm" type="video/quicktime"/>
                                </video>
                                <h1 className="content-center text-center !text-gray-400 mt-2">
                                    Edit card
                                </h1> 

                            <p className="text-center mt-20">
                                Projects can be saved as drafts. These are hidden from users&apos; card stacks and the All Projects tab.
                                Drafts are stored in the Profile tab with other cards.
                            </p>
                            </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center mb-4">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <h2 className="pl-2 pr-2 font-semibold">Track Projects</h2>
                    {/* <div className="flex-grow border-t border-gray-200"></div> */}
            </div>

            <div className="mb-10">
                <div className="flex flex-col sm:flex-row items-center w-full justify-center mt-5">
                    <div className="flex flex-row justify-center space-x-4 sm:space-x-8">
                        <video 
                            autoPlay
                            loop
                            playsInline
                            webkit-playsinline="true"
                            className="pointer-events-none max-w-50">
                            style="background: transparent;"
                            <source src="/swipe-mockup/unlikeprojectflow.webm" type="video/webm"/>
                            <source src="/swipe-mockup/unlikeprojectflow.webm" type="video/quicktime"/>
                        </video>
                    </div>

                    <p className="text-center p-10">
                        The <b>Liked tab</b> stores cards saved by the user. Here, the user can manage their saved projects.
                    </p>
                </div>
            </div>

            <hr className="border-t-1 border-t-gray-200 mt-6 mb-8" />

            <div>
                <h2 className="mb-4">
                    Next steps
                </h2>
                
                <p>
                    <b>Notifications</b><br />
                    When saved cards are updated by project owners, users should be notified of the update.
                </p>

                <br />

                <p>
                    <b>Chat interface</b><br />
                    Swipe can expand to include a chat interface, to migrate pair-programming communications from Zulip onto Swipe.
                </p>

                <br />

                <p>
                    <b>Profile View</b><br />
                    We can also add a Recurser Profile view, so users can see the profiles of
                    project owners. The Recurse Center has its own API endpoint that we call for login information and 
                    user profile pictures, but we can also retrieve more information to display a more complete Recurser profile.
                </p>

                <br />

                <p>
                    <b>Settings Page</b><br />
                    It would probably include a log out button and notifications toggle.
                    Each user can only sign in with their own Recurse email or authentication key. Once logged in, users ideally should not 
                    be frequently logged out, so as to avoid friction.
                </p>
            </div>
        </article>
    )
}