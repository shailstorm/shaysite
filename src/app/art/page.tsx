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

    const displayPieces = pieces
        .filter(piece => piece.display)
        .sort((a: ArtPiece, b: ArtPiece) => parseInt(b.date.split(" ")[2]) - parseInt(a.date.split(" ")[2]));

    const odds = displayPieces.filter((_, i) => i % 2 === 0);
    const evens = displayPieces.filter((_, i) => i % 2 === 1);
    const reorderedPieces = [...odds, ...evens];

    return (
        <div className="flex justify-center">
            <div className="columns-1 sm:columns-2 gap-6 max-w-4xl space-y-2">
                { reorderedPieces
                    .map((piece, index) => ( 
                        <article key={index} className="break-inside-avoid pb-3">
                            <Image
                                src={piece.imagePath}
                                alt={piece.title}
                                style={{ maxWidth: "100%", height: "auto" }}
                                width={300}
                                height={300} />
                            <span className="flex justify-center text-gray-500"><p>{piece.date.split(" ").pop()}</p></span>
                            <p>{piece.description}</p>
                        </article>
                    ))
                }
            </div>
        </div>
    )
}