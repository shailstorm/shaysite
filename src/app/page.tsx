// LANDING PAGE "/"
import Link from "next/link";

export default function Home() {
  return (
    <div>

        <p className="mb-4">
          Hi, I'm Shay! <br />
        </p>


        <p className="mb-4">
          I studied CS at <Link href="https://en.wikipedia.org/wiki/Wellesley_College" className="text-violet-400">Wellesley College</Link> and MIT, where I did undergraduate research work. My favorite classes were <Link href="https://web.mit.edu/6.102/www/sp25/" className="text-violet-400">Software Construction</Link> at MIT, Organic Chemistry at Wellesley, and <Link href="https://cs.wellesley.edu/~cs235/" className="text-violet-400">Automata Theory</Link> at Wellesley (which I TA'ed for). <br />
        </p>

        <p className="mb-4">
          I'm currently in Brooklyn, NY finishing up a batch at <Link href="recurse.com" className="text-violet-400">The Recurse Center</Link>.
        </p>

        <p className="mb-8">
          In the fall, I'll be at UChicago studying for my Master's in CS <i>(unless you hire me!)</i>.
        </p>

        <hr className="border-t-1 border-dashed border-t-violet-300" />

        <p className="mb-4 mt-8">
          I'm artistically inclined; I love drawing, sculpting, and making pixel art. <br />
        </p>

        <p className="mb-4">
          Nothing is final -- I question relentlessly. <br />
          Above all, <b> I hope to elevate your experiences!</b> <br />
        </p>

    </div>
  );
}