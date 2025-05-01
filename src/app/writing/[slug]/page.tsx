// '/writings/[slug]'
// DYNAMIC ROUTE FOR EACH BLOG POST "/writing-post-title-here"


import fs from 'fs/promises';
import path from 'path';
import { posts } from '../../../data/writings'
import { MDXRemote } from 'next-mdx-remote/rsc'


interface WritingsProps {
    params: {
        slug: string;
    };
}

export default async function WritingsPostPage({ params }: WritingsProps) {

    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src', 'data', 'writings', `${slug}.mdx`)

    const post = posts.find((p) => p.slug === slug);

    const title = post ? post.title : "unknown post";

    let content: string;
    try { content = await fs.readFile(filePath, 'utf-8'); }
    catch ( error ) { content = "post not found...go dig elsewhere" }

    return (
        <article>   
            <h2><b>{ title }</b></h2>
            <MDXRemote source={content} />
        </article>
    )
}