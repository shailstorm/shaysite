// '/writings'
// INDEX PAGE FOR ALL WRITINGS

import Link from 'next/link';
import { posts } from './posts'

export default function WritingsPage() {
    return (
        <div>
            <ol>
                {
                    posts.map((post)=>(
                        <li key={post.slug}>
                            <h1 className='mb-2'>
                                <Link href={ `/writing/${post.slug}`}>{post.title}</Link>
                            </h1>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}