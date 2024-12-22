import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm'
import AnimatedContent from '../components/motion/AnimatedContent';

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  }
}

export async function generateStaticParams() {
  const directoryPath = path.join('src', 'mdx');
  const files = fs.readdirSync(directoryPath);

  const paths = files
    .filter((filename) => {
      const filePath = path.join(directoryPath, filename);
      return fs.statSync(filePath).isFile() && path.extname(filename) === '.mdx';
    })
    .map((filename) => ({
      slug: filename.replace('.mdx', ''),
    }));

  return paths;
}

function getArticle({ slug }: { slug: string }) {
  const filePath = path.join('src', 'mdx', slug + '.mdx');

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return notFound();
  }

  const markdownFile = fs.readFileSync(filePath, 'utf-8');

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params } : any) {
  const article = getArticle(params);

  if (article) 
  return{
    title: article.frontMatter.title,
    description: article.frontMatter.description,
    keywords: article.frontMatter.keywords,
    authors: [{name: article.frontMatter.author, url: article.frontMatter.authorURL}],
    applicationName: 'blockchain.something'
  }
}

export default function Article({ params } :any) {
  const props = getArticle(params);

  return (
      <div className='mx-auto items-center max-w-7xl pb-24 sm:pb-32 lg:flex py-32'>
        <article className='!max-w-full prose prose-md lg:prose-lg prose-stone lg:mx-0 mx-auto w-full p-0'>
          <h1 className='scroll-m-20 text-5xl font-bold tracking-tight'>{props.frontMatter.title}</h1>
          <AnimatedContent>
            <div className='max-w-5xl'>
              <MDXRemote source={props.content} options={options}/>
            </div>
          </AnimatedContent>
        </article>
      </div>
  )
}