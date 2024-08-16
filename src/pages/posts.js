import client from '../sanity/lib/client'
import groq from 'groq'

import PostPreview from '../../components/blog/post-preview';

function dateFormatter(fullDate) {
  const date = new Date(fullDate)
  return date.toDateString().slice(4)
}

export default function Posts ({post}) {
  return (
    <div>

      {/* header */}
      <section className='container-fluid' id='header'>
        <div className='row'>
          <h1>All Posts</h1>
          <p>I tend to write about whatever is on my mind and the type of tech I&apos;m currently working on/learning.</p>
        </div>
      </section>

      {/* All posts */}
      <section className='container' id='posts'>
        <div className='row gy-2'>
          {
            post.map(posts => (
              <div key={posts.slug.current} className='p-3 rounded text-bg-light col-9'>
                <PostPreview title={posts.title} date={dateFormatter(posts.publishedAt)} summary={posts.summary} link={posts.slug.current} />
              </div>
            ))
          }
        </div>
      </section>

    </div>
  )
}

export async function getStaticProps() {
  const post = await client.fetch(groq`*[_type == "post"] | order(_createdAt desc) {
    title,
    author->,
    category,
    publishedAt,
    summary,
    slug
  }`);
  return {
    props: {
      post: post
    }
  }
}