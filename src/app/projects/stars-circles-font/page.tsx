import Link from "next/link";

export default function StarsCirclesFontPage() {
  return (
    <section className="w-full flex flex-col items-center">
      <p className="text-center mb-4">first p5.js thing~</p>

      <div className="w-full max-w-[800px] aspect-video">
        <iframe
          className="w-full h-full border-0"
          src="/stars-circles-font/index.html"
          title="stars and circles"
          allowFullScreen
        />
      </div>

      <div className="text-center mt-6">
        <p>
          <Link href="https://github.com/shailstorm/dynamic-font" target="_blank">
            code here!
          </Link>
        </p>
      </div>
    </section>
  );
}
