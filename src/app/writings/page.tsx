// INDEX PAGE FOR ALL WRITINGS "/writings"

import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
}

const posts: Post[] = [
    { slug: 'first-post', title: 'First Post' },

]

export default function WritingsIndexPage() {
    return (
        <div>
            <p>Here are some of my thoughts.</p>
            <ul>
                {
                    posts.map((post)=>(
                        <li key={post.slug}>
                            <Link href={ `/writings/${post.slug}`}>{post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}