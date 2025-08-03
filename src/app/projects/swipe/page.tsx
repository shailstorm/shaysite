import Image from "next/image";

import { inter, libertinus } from "@/fonts"

export default function SwipeMockupPage() {
    return (
        <div className="design-project">

            <div className="text-xl font-[lora] text-gray-500 italic p-8 m-4 mb-10 rounded-2xl border-1 border-indigo-100">
                This page is under construction but the relevant mockup is at the bottom! <br />
                <p>Thanks, Shay <br /> 8/3/25</p>
            </div>

            <h1 className= { inter.className +" large-text !text-gray-700 font-bold" }>Swipe</h1>

            <h2 className= { libertinus.className + " mb-4 mt-1" }>July 2025 · 2 weeks</h2>
            
            <hr className="border-t-1 border-t-gray-200 mt-6 mb-8" />

            <h1>Problem</h1>
            <p>
                Members and alumni of The Recurse Center are often looking to
                pair together on coding projects or challenges. 
                This is an integral part of a batch at Recurse.
            </p>
            <br />

            <h1>Recurser Needs</h1>
            <ul className="">
                <li><b>Share</b> what they are working on.</li>
                <li><b>Exposure to and information about</b> what other Recursers are working on.</li>
                <li><b>Track progress</b> of projects that excite them.</li>
            </ul>
            <br />

            <h1>Current Method</h1>

            <p>
                Currently, people find projects via the Zulip messaging platform, where each project lives in a separate Zulip discussion thread.
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

            <h1>Prototyping</h1>
            <p>
                When considering a project, Recursers want to know:
            </p>
            <ul>
                <li>Languages and tech stack</li>
                <li>The project&apos;s goal and where it currently stands in relation to the goal.</li>
            </ul>


            <div className="m-6 relative w-screen left-1/2 -mx-[50vw] overflow-hidden">
                <div className="max-w-[85vw] md:max-w-[80vw] lg:max-w-3xl mx-auto overflow-x-auto bg-gray-50 rounded-xl border-1 border-gray-100">
                    <table className="m-2 mb-4 mx-auto border-separate border-spacing-x-8 border-spacing-y-8 w-full min-w-[600px] max-w-[800px] text-gray-400">
                        <thead className="text-gray-500 text-[15px] font-[karla]">
                            <tr className="whitespace-nowrap text-center">
                                <th className="">Pain Point</th>
                                <th className="">Explanation</th>
                                <th className="">Solution</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-left">
                            <tr>
                                <td className="align-top text-center">Zulip Integration</td>
                                <td>The Recurse Center leverages Zulip as its communication hub for projects, which we want to maintain.</td>
                                <td>Create a Zulip Swipe bot that makes each user a Swipe channel on Zulip and manages subscriptions based on saved projects in their Swipe user profiles. </td>
                            </tr>

                            <tr>
                                <td className="align-top text-center">Clutter</td>
                                <td>Inactive projects may clutter the project stack.</td>
                                <td>Projects have expiration dates, upon which they are removed from the project stack.</td>
                            </tr>

                            <tr>
                                <td className="align-top text-center">Archive Access</td>
                                <td>Users may want to see older projects.</td>
                                <td>Users can filter for or against expired projects in the &quot;All Projects&quot; Tab.</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


            <div className="flex flex-col">
                <div className="flex flex-row">
                    <Image
                        src={"/swipe-mockup/login.png"}
                        alt={"login"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />
                    <div className="content-center">
                        Calls the Recurse authentication API during login.
                    </div>
                </div>
            </div>
            

            <div className="mb-6 relative w-screen left-1/2 -mx-[50vw] overflow-hidden">
                <div className="flex flex-rows mx-auto overflow-x-auto">
                    <Image
                        src={"/swipe-mockup/login.png"}
                        alt={"login"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/feed nonliked.png"}
                        alt={"feed nonliked"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/feed liked.png"}
                        alt={"feed liked"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/feed swiping.png"}
                        alt={"feed swiping"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/all projects.png"}
                        alt={"all projects"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/selected_project.png"}
                        alt={"selected project"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/my projects.png"}
                        alt={"my projects"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/edit or delete project.png"}
                        alt={"edit or delete"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />

                    <Image
                        src={"/swipe-mockup/edit project card.png"}
                        alt={"edit project"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />
                    
                    <Image
                        src={"/swipe-mockup/create project card.png"}
                        alt={"edit project"}
                        // style={{ maxWidth: "30%", height: "30%" }}
                        style={{ padding: 40 }}
                        width={300}
                        height={300} />
                </div>
            </div>

        </div>
    )
}