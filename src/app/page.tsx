// LANDING PAGE "/"
import Link from "next/link";

export default function Home() {
  return (
    <div className="">

        <p className="mb-4">
          Hi, I&apos;m Shay! I studied CS at <Link href="https://en.wikipedia.org/wiki/Wellesley_College" className="text-violet-300 text-decoration-line: underline">Wellesley College</Link> and MIT, where I also did undergraduate research work in Navigational Affordance and Prosody Prediction by LLMs. My favorite classes were <Link href="https://web.mit.edu/6.102/www/sp25/" className="text-violet-300 text-decoration-line: underline">Software Construction</Link> at MIT, Organic Chemistry at Wellesley, and <Link href="https://cs.wellesley.edu/~cs235/" className="text-violet-300 text-decoration-line: underline">Automata Theory</Link> at Wellesley (which I TA&apos;ed for). <br />
        </p>

        <p className="mb-4">
          I&apos;m currently in Brooklyn, NY finishing up a batch at <Link href="https://www.recurse.com" className="text-violet-300 text-decoration-line: underline"><u></u>The Recurse Center</Link>.
        </p>

        <p className="mb-4">
          This fall, I&apos;ll be at UChicago for my Master&apos;s in CS (unless you hire me :D).
        </p>

        <hr className="border-t-1 border-dotted border-t-violet-200 mt-8 mb-8" />

        <p className="mb-4">
          I&apos;m artistically inclined; I love drawing, sculpting, and making pixel art. <br />
        </p>

        <p className="mb-4">
          Nothing is final -- I question relentlessly. <br />
          Most of all, <b className="text-indigo-400"> I hope to elevate your experiences!</b> <br />
        </p>

    </div>
  );
}