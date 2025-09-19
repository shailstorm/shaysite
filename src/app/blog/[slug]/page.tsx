// '/blog/[slug]'
// DYNAMIC ROUTE FOR EACH BLOG POST "/blog-post-title-here"


import fs from 'fs/promises';
import path from 'path';
import { posts } from '../posts'
import { MDXRemote } from 'next-mdx-remote/rsc'


interface BlogProps {
    params: Promise<{ slug: string; }>;
}

export default async function BlogPostPage( { params }: BlogProps ) {

    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src', 'data', 'blogposts', `${slug}.mdx`);

    const post = posts.find((p) => p.slug === slug);
    const title = post ? post.title : "unknown post";
    const date = post?.date ? new Date(post.date).toLocaleDateString() : null;

    let content: string;
    try { content = await fs.readFile(filePath, 'utf-8'); }
    catch ( err ) { console.error(err); content = "post not found :("; }

    return (
        <article>
            <header className='mb-8'>
                <h1>{title}</h1>
                {date && <time>{date}</time>}
            </header>
            
            <MDXRemote source={content} />
        </article>
    );
}