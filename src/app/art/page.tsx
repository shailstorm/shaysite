// INDEX PAGE FOR ALL ART "/art"

import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Nav from "../nav";

interface ArtPiece {
    title: string;
    description: string;
    imagePath: string;
    date: string;
}

export default async function ArtIndexPage() {
    const dataFilePath = path.join(process.cwd(), "src", "data", "art.json");
    const fileContents = await fs.readFile(dataFilePath, "utf-8");
    const pieces: ArtPiece[] = JSON.parse(fileContents);

    return (
        <section>
            <Nav></Nav>
            <h1>
                non-program things i've made, spanning 2019 (aged 17) to the past couple of weeks (aged 22)
            </h1>

            <p> i've been doodling and drawing for a few years now, albeit infrequently.
            i'm grateful to use (but not limited to) drawing, painting, sculpting, computation, etc as media to experiment with self expression and creativity. i intend to do this more.</p>

            <div style={{ display: "grid", gap: "1rem"}}>
                { pieces.map((piece, index) => (
                    <article key={index} style={{padding: "10px"}}>
                        <Image
                            src={piece.imagePath}
                            alt={piece.title}
                            style={{ maxWidth: "100%", height: "auto" }}
                            width={500}
                            height={500} />
                        <span><p>{piece.date.split(" ").pop()}</p></span>
                        <p>{piece.description}</p>
                    </article>
                    ))
                }
            </div>
        </section>
    )
}