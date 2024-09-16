import client from '../../sanity/lib/client.js';
import Link from 'next/link'
import groq from 'groq'
import { useEffect } from 'react';

import {marked} from 'marked'
import Markdown from 'marked-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/atom-one-dark.css';

export default function Blog({ post }) {
  const html = marked(post?.body)

  useEffect(() => {
    hljs.highlightAll();      
  }, [])

  return (
    <div className='container my-3'>
      <h1 className='text-center'>
        {post.title}
      </h1>
      <h4 className='my-2 text-center'>by {post.author.name}</h4>
      <p className='my-2 text-center'>
        <Link href='/posts'>
          &larr; go back to all posts 
        </Link>
      </p>
      <div className="row d-flex justify-content-center">
        <article className="overflow-hidden col-12 col-md-10" dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  )
}

export async function getStaticProps({params}) {
  const {slug} = params
  const post = await client.fetch(groq`*[_type == "post" && slug.current == "${slug}"] [0]{
    title,
    author->,
    body,
    publishedAt,
    slug
  }`);
  return {
    props: {
      post: post
    },
    revalidate: 60
  }
}


export async function getStaticPaths() {
  const paths = await client.fetch(groq`
    *[_type == "post" && defined(slug.current)][].slug.current
  `)
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}