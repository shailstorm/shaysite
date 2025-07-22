// INDEX PAGE FOR BOOK LIST

import fs from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";

interface Book {
    title: string,
    author: string,
    rating: string,
    description: string,
    finished: string,
}

export default async function BooksPage() {
    if (process.env.NODE_ENV === "production") {
        notFound();
    }

    const dataFilePath = path.join(process.cwd(), "src", "data", "books.json");
    const fileContents = await fs.readFile(dataFilePath, 'utf-8');
    const books: Book[] = JSON.parse(fileContents);

    const finished: Book[] = books.filter((book) => book.finished == "yes");
    const inProgress: Book[] = books.filter((book) => book.finished == "no")
    const sortedByRating: Book[] = finished.sort((book1, book2) => parseFloat(book2.rating) - parseFloat(book1.rating));
    const top5: Book[] = sortedByRating.slice(0, 5);

    return (
        <div className="flex flex-row ml-6 space-x-5 justify-between">

            <div className="flex-5 flex-col justify-between space-y-5">
                <section>
                    <p className="text-xl"><u>current reads</u></p>
                    <ul>
                        <li><b>Germinal - Zola</b></li>
                        <li><b>The Brothers Karamozov - Dostoevsky</b></li>

                    </ul>
                </section>

                <section>
                    <h2 className="text-xl"><u>queue</u></h2>
                    <ul>
                        <li><b>The Ethics of Ambiguity - De Beauvoir</b></li>
                        <li><b>The Perfect Crime - Baudrillard</b></li>
                    </ul>

                </section>
            </div>
            
            <div className="flex-4">
                <section>
                    <h2 className="text-xl"><u>desert island books</u></h2>
                    
                    <ul>
                        <li>
                            <b>Will to Power - Nietzche </b>
                            <p><i>will to live/endure (as strength)</i> </p>
                        </li>

                        <li>
                            <b>Beware of Pity -  Zweig</b>
                            <p><i>acts of pity are often self-serving and avoidant (saves oneself from the complexity)</i> </p>
                        </li>

                        <li>
                            <b>The Dispossessed - LeGuin</b>
                            <p><i>living authentically is a great act of revolution </i> </p>
                        </li>   
                    </ul>
                </section>

            </div>
        </div>
    )
}