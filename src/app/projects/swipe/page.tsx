// import Link from "next/link";

import { inter, libertinus } from "@/fonts"

export default function SwipeMockupPage() {
    return (
        <div className="design-project">
            <h1 className= {  inter.className +" large-text text-gray-700 font-bold" }>Swipe</h1>

            <h2 className= { libertinus.className + " mb-4 mt-1" }>July 2025 · 2 weeks</h2>
            
            <hr className="border-t-1 border-t-gray-200 mt-6 mb-8" />
            
            <h1 className="text-lg text-gray-600">Problem</h1>
            <p>
                Members and alumni of The Recurse Center are often looking to
                pair together on coding projects or challenges. 
                This is an integral part of a batch at Recurse.
            </p>
            <br />

            <h1 className="text-lg text-gray-600">Recurser Needs</h1>
            <ul className="">
                <li><b>Share</b> what they are working on.</li>
                <li><b>Exposure to and information about</b> what other Recursers are working on.</li>
                <li><b>Track progress</b> on projects that excite them.</li>
            </ul>
            <br />

            <h1 className="text-lg text-gray-600">Current Method</h1>

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

            <h1 className="text-lg text-gray-600">Prototyping</h1>
            <p>
                When considering a project, Recursers want to know:
            </p>
            <ul>
                <li>Languages and tech stack</li>
                <li>The project&apos;s goal and where it currently stands in relation to the goal.</li>
            </ul>


            <div className="m-6 relative w-screen left-1/2 -mx-[50vw] overflow-hidden">
                <div className="max-w-[85vw] md:max-w-[80vw] lg:max-w-3xl mx-auto overflow-x-auto bg-gray-50 rounded-xl border-1 border-gray-100">
                    <table className=" m-2 mb-4 mx-auto border-separate border-spacing-x-8 border-spacing-y-8 w-full min-w-[600px] max-w-[800px] text-gray-400">
                        <thead className="text-gray-500 text-[15px] font-[lora]">
                            <tr className="whitespace-nowrap text-center">
                                <th className="">Pain Point</th>
                                <th className="">Explanation</th>
                                <th className="">Solution</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-left">
                            <tr>
                                <td className="align-top text-center">Zulip API Integration</td>
                                <td>The Recurse Center leverages Zulip as its communication hub for projects, which we want to maintain.</td>
                                <td>Create a Zulip Swipe bot that makes a dedicated channel for each user and subscribes to the corresponding threads of the user&apos;s saved projects. Owners of projects simply link the Zulip thread in their project profile, and other users will be added to or removed from the thread automatically.</td>
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


        </div>
    )
}