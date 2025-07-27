// LANDING PAGE "/"
import Link from "next/link";
import { lora } from '@/fonts';

export default function Home() {
  return (
    <div>

        <p className="mb-4">
          Hi, I&apos;m Shay! I studied CS at{" "}
          <Link href="https://en.wikipedia.org/wiki/Wellesley_College" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff]  hover:decoration-[#a79aff]">
          Wellesley College</Link> and MIT, where I also did undergraduate research work in Navigational Affordance and Prosody Prediction by LLMs. 
          My favorite classes were <Link href="https://web.mit.edu/6.102/www/sp25/" target="_blank" rel="noopener" className="text-[#A396FD] text-decoration-line: underline decoration-[#d7d0ff]  hover:decoration-[#a79aff]">
          Software Construction</Link> at MIT, Organic Chemistry at Wellesley, and Automata Theory at Wellesley (which I TA&apos;ed for). <br />
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

    </div>
  );
}