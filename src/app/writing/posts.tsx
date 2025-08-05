export interface Post {
    slug: string;
    title: string;
    date?: string;
}

export const posts: Post[] = [
    { slug: 'note-to-self', title: "Notes", date: "8/3/2025"},
    { slug: 'hammer', title: "Hammer", date: "" },
    { slug: 'climbing', title: "Yoda Proverb", date: "July 25, 2025" },
    { slug: 'solitude', title: "Solitude with Friends", date: "July 20, 2025"}
]