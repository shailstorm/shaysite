// DYNAMIC ROUTE FOR EACH BLOG POST "/writing-post-title-here"

import fs from 'fs/promises';
import path from 'path';

interface WritingsProps {
    params: {
        slug: string;
    };
}

export default async function WritingsPostPage({ params }: WritingsProps) {
    const { slug } = params;

    const filePath = path.join(process.cwd(), 'src', 'data', 'writings', `${slug}.txt`)

    let content: string;

    try { content = await fs.readFile(filePath, 'utf-8'); }
    catch (error) { content = "can't find the post :( try digging somewhere else" }

    return (
        <article>
            <h2>{params.slug.replace(/-/g, ' ')}</h2> {/* title. replace all instances of '-' with ' ' */}
            <p>{ content }</p>
        </article>
    )
}