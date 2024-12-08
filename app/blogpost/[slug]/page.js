import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from '@/components/onthispage'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

export default async function Page({ params }) {

    // const blog = {
    //     title: "Sample Blog Post",
    //     author: "John Doe",
    //     description: "This is a sample blog post.",
    //     date: "2023-10-01",
    //     content: "<p>This is the HTML content of the blog post.</p>"
    // };
    
    const filepath = `content/${params.slug}.md`

    if(!fs.existsSync(filepath)){
        notFound()
        return
    }

    const fileContent =fs.readFileSync(filepath,"utf-8")
    const{content,data} = matter(fileContent)

    const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, {title: '👋🌍'})
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
        theme: "aurora-x",
        keepBackground: false,
        transformers: [
            transformerCopyButton({
              visibility: 'always',
              feedbackDuration: 3_000,
            }),
          ],
      })
    
    const htmlContent =(await processor.process(content)).toString()
    
    
    
    return (
        <div className="max-w-5xl mx-auto p-4" >
            <h1 className="text-4xl font-bold mb-5">{data.title}</h1>
           <p className="text-base mb-4 italic border-l-4 border-gray-500 pl-4">{data.description}</p>
            <div className="flex gap-2">
                <p className="text-sm font-semibold mb-4">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4"> {data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
            <OnThisPage htmlContent={htmlContent}/>
            
        </div>
    )
}