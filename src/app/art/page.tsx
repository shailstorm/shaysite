// INDEX PAGE FOR ALL ART "/art"

import fs from "fs/promises";
import path from "path";
import Image from "next/image";

interface ArtPiece {
    title: string;
    description: string;
    imagePath: string;
    date: string;
    display: boolean;
}

export default async function ArtPage() {
    const dataFilePath = path.join(process.cwd(), "src", "data", "art.json");
    const fileContents = await fs.readFile(dataFilePath, "utf-8");
    const pieces: ArtPiece[] = JSON.parse(fileContents);

    return (
        <div className="flex flex-row">

            <div style={{ display: "grid", gap: "1rem"}}>
                <h1 className="">
                
                </h1>
                { pieces.map((piece, index) => ( 
                    piece.display == true &&
                    <article key={index} style={{paddingBottom: "8rem"}}>
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
        </div>
    )
}