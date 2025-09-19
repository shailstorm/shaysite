// '/blog'
// INDEX PAGE FOR ALL BLOGS

import Link from 'next/link';
import { posts } from './posts'

export default function BlogPage() {
    return (
        <div>
            <ol>
                {
                    posts.map((post)=>(
                        <li key={post.slug}>
                            <h1 className='mb-2 hover:underline hover:decoration-gray-400 underline-offset-2'>
                                <Link href={ `/blog/${post.slug}`}>{post.title}</Link>
                            </h1>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}