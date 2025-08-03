export interface Post {
    slug: string;
    title: string;
}

export const posts: Post[] = [
    { slug: 'note-to-self', title: "notes"},
    { slug: 'hammer', title: "hammer" },
    { slug: 'climbing', title: "yoda proverb" },
    { slug: 'solitude', title: "solitude with friends" }
]