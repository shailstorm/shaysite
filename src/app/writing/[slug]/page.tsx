// '/writings/[slug]'
// DYNAMIC ROUTE FOR EACH BLOG POST "/writing-post-title-here"


import fs from 'fs/promises';
import path from 'path';
// import { posts } from '../posts'
import { MDXRemote } from 'next-mdx-remote/rsc'


interface WritingsProps {
    params: Promise<{ slug: string; }>;
}

export default async function WritingsPostPage( { params }: WritingsProps ) {

    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src', 'data', 'writings', `${slug}.mdx`);

    // const post = posts.find((p) => p.slug === slug);
    // const title = post ? post.title : "unknown post";

    let content: string;
    try { content = await fs.readFile(filePath, 'utf-8'); }
    catch ( err ) { console.error(err); content = "post not found :("; }

    return (
        <article>
            <MDXRemote source={content} />
        </article>
    );
}