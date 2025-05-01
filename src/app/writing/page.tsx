// '/writings'
// INDEX PAGE FOR ALL WRITINGS

import Link from 'next/link';
import { posts } from '../../data/writings'

export default function WritingsPage() {
    return (
        <div>
            <ul>
                {
                    posts.map((post)=>(
                        <li key={post.slug}><b>
                            <Link href={ `/writing/${post.slug}`}>{post.title}</Link>
                            </b>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}