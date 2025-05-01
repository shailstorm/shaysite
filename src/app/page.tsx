// LANDING PAGE "/"
import Link from "next/link";

export default function Home() {
  return (
    <div>

        <p className="mb-8">
          <b>hi, i’m shay</b> <br />
        </p>


        <p className="mb-8">
          <b>creation?</b> <br />
          i mostly use<br />
          drawing<br />
          sculpting<br />
          writing<br />
          coding<br />
        </p>


        <p className="mt-16">
          <b>lately...</b> <br />
          <Link href="https://open.spotify.com/episode/41SFvyFC6jQVzFNlXpY7xp?si=25f6ea0a6f274436&nd=1&dlsi=ce7e7b9537154f7b"
            target='_blank'
            className="text-gray-400 hover:underline-offset-4"
          >trying</Link> differently, playing with
          <Link href="/design"
            // target='_blank'
            className="text-gray-400 hover:underline-offset-4"
          > design</Link>,
        </p>

    </div>
  );
}