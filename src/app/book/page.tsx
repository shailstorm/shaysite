// INDEX PAGE FOR BOOK LIST

import fs from "fs/promises";
import path from "path";

interface Book {
    title: string,
    author: string,
    rating: string,
    description: string,
    finished: string,
}

export default async function BooksPage() {

    const dataFilePath = path.join(process.cwd(), "src", "data", "books.json");
    const fileContents = await fs.readFile(dataFilePath, 'utf-8');
    const books: Book[] = JSON.parse(fileContents);

    const finished: Book[] = books.filter((book) => book.finished == "yes");
    const inProgress: Book[] = books.filter((book) => book.finished == "no")
    const sortedByRating: Book[] = finished.sort((book1, book2) => parseFloat(book2.rating) - parseFloat(book1.rating));
    const top5: Book[] = sortedByRating.slice(0, 5);

    return (
        <div className="flex flex-row ml-6">
            <section>
                <h2><b>current reads: </b></h2>
                <ul>
                    { 
                        inProgress.map((book, index) => (
                            <li key={index}>
                                {book.title} by {book.author}. {"\n"}
                                {book.description}
                            </li>
                        ))
                    }
                </ul>
            </section>
            
            <section>
                <h2><b>5 desert island books: </b></h2>
                <ul>
                    { 
                        top5.map((book, index)=> (
                            <li key={index}>
                                {book.title} by {book.author}. {"\n"}
                                {book.description}
                            </li>
                        ))
                    }
                </ul>
            </section>


            <p></p>
        </div>
    )
}