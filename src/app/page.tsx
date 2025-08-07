// LANDING PAGE "/"
import Link from "next/link";
import { lora, karla } from '@/fonts';

export default function Home() {
  return (
    <div className={karla.className + ""}>
        <h1 className="mt-1 mb-2">I&apos;m Shaylee!</h1>

        <p className="mb-4">
          I studied CS at{" "}
          <Link href="https://en.wikipedia.org/wiki/Wellesley_College" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff]  hover:decoration-[#a79aff]">
          Wellesley College</Link> and MIT, where I also did research in Navigational Affordance and <Link href="https://aclanthology.org/2025.acl-long.1471/" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff]  hover:decoration-[#a79aff]">Prosody Prediction by LLMs</Link>. 
          My favorite classes were <Link href="https://web.mit.edu/6.102/www/sp25/" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff]  hover:decoration-[#a79aff]">
          Software Construction</Link>, Organic Chemistry, and Automata Theory (which I TA&apos;ed for). <br />
        </p>

        <p className="mb-4">
          I&apos;m currently in Brooklyn, NY finishing up a batch at{" "}
          <Link href="https://www.recurse.com" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff] hover:decoration-[#a79aff]">
          The Recurse Center</Link>.
        </p>

        <p className="mb-4">
          This fall, I&apos;ll be at UChicago for my Master&apos;s in CS (unless you hire me~).
        </p>

        <hr className="border-t-1 border-dotted border-t-violet-200 mt-8 mb-8" />

        <p className="mb-4">
          I love design, sculpting, and making pixel art. <br />
        </p>

        <p className="mb-4">
          Most of all, <b className={`${lora.className} text-[#6f74ff]`}><i>I hope to elevate your experiences!</i></b>
          <br />
        </p>

        <hr className="border-t-1 border-dotted border-t-violet-200 mt-8 mb-8" />

        <p className="mt-1 mb-1">Recent Projects</p>
        <h1>
            <Link href="projects/swipe/">Swipe Design Mockup</Link>
        </h1>

    </div>
  );
}