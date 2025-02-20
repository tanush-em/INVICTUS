import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join } from "path";
import { Badge } from "@/components/ui/badge";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeFormat from "rehype-format";
import remarkEmoji from "remark-emoji";

// Function to get event slugs from the content directory
function getEventSlugs() {
    const contentDir = join(process.cwd(), 'content');
    if (!fs.existsSync(contentDir)) {
        console.warn('Event content directory not found:', contentDir);
        return [];
    }
    return fs.readdirSync(contentDir).filter(filename => filename.endsWith('.md')).map(filename => filename.replace('.md', ''));
}

// Generate static paths for dynamic routing
export async function generateStaticParams() {
    return getEventSlugs().map(slug => ({ slug }));
}

// Generate metadata for the page
export async function generateMetadata({ params }) {
    const { slug } = params;
    const filepath = join(process.cwd(), 'content', `${slug}.md`);
    if (!fs.existsSync(filepath)) return { notFound: true };

    const { data } = matter(fs.readFileSync(filepath, "utf-8"));
    return { title: data.title, description: data.description };
}

// Main component to render the event page
export default async function EventPage({ params }) {
    const { slug } = params;
    const filepath = join(process.cwd(), 'content', `${slug}.md`);
    if (!fs.existsSync(filepath)) { notFound(); return; }

    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    // Unified processor to convert Markdown to HTML
    const processor = unified()
        .use(remarkParse) // Parse Markdown
        .use(remarkGfm) // Support GitHub Flavored Markdown (tables, strikethrough, etc.)
        .use(remarkEmoji) // Parse emojis
        .use(remarkRehype, { allowDangerousHtml: true }) // Convert Markdown to HTML
        .use(rehypeSlug) // Add IDs to headings
        .use(rehypeAutolinkHeadings, { behavior: 'append' }) // Add links to headings
        .use(rehypeFormat) // Format the HTML output
        .use(rehypeStringify); // Convert HTML to a string

    const htmlContent = (await processor.process(content)).toString();

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto mb-6 md:mb-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{data.title}</h1>
                    <Badge>{data.event_type}</Badge>
                </div>
                <p className="text-sm md:text-base mb-4 italic">{data.description}</p>
                <div className="bg-gray-50 dark:bg-gray-800/30 rounded-lg p-4 md:p-6 mb-4">
                    <p><strong>Date:</strong> 22 February 2025</p>
                    <p><strong>Location:</strong> {data.location}</p>
                </div>
                {data.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {data.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                    </div>
                )}
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="prose dark:prose-invert max-w-4xl mx-auto
                    prose-sm md:prose-base lg:prose-lg
                    prose-headings:scroll-mt-20
                    prose-h1:text-2xl md:prose-h1:text-3xl 
                    prose-h2:text-xl md:prose-h2:text-2xl 
                    prose-h3:text-lg md:prose-h3:text-xl
                    prose-p:text-gray-700 dark:prose-p:text-gray-300
                    prose-a:text-blue-600 dark:prose-a:text-blue-400
                    prose-img:rounded-lg
                    prose-pre:bg-gray-900 dark:prose-pre:bg-gray-800
                    prose-pre:p-4 prose-pre:rounded-lg
                    prose-code:text-blue-600 dark:prose-code:text-blue-400"
            />
        </div>
    );
}