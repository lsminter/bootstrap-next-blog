import { Inter } from 'next/font/google'
import PostPreview from '../../components/blog/post-preview'
import client from '../sanity/lib/client'
import groq from 'groq'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home({post}) {
  function dateFormatter(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4)
  }

  return (
    <div className=''>

      {/* Jumbotron */}
      <section id="jumbotron">
        <div className="container-fluid header-cta">
          <div className='row align-items-center h-100'>
            <div className="col col-sm-5 p-3 mx-4 bg-light rounded">
              <h1>Lucas Minter</h1>
              <p>Front End Web Development</p>
              <div className='row'>
                <a href="https://github.com/lsminter" className='col-3 icon-link icon-link-hover'>
                  <Image
                    src={'/images/icons/icons8-github.svg'}
                    className='bi w-75 h-75'
                    width={50}
                    height={50}
                    alt="small icon for github.com"
                  />
                </a>
                <a href="https://www.linkedin.com/in/lucas-minter-67b9a097/" className='col-3 icon-link icon-link-hover'>
                  <Image
                    src={'/images/icons/icons8-linkedin.svg'}
                    className='bi w-75 h-75'
                    width={50}
                    height={50}
                    alt="small icon for linkedin.com"
                  />
                </a>
                <a href="https://twitter.com/lucasminter" className='col-3 icon-link icon-link-hover'>
                  <Image
                    src={'/images/icons/icons8-twitter.svg'}
                    className='bi w-75 h-75'
                    width={50}
                    height={50}
                    alt="small icon for twitter.com"
                  />
                </a>
                <a href="https://egghead.io/q/resources-by-lucas-minter" className='col-3 icon-link icon-link-hover'>
                  <Image
                    src={'/images/icons/egghead.svg'}
                    className='bi w-75 h-75'
                    width={50}
                    height={50}
                    alt="small icon for egghead.io"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Bio */}
      <section id='bio'>
        <div className='container my-5'>
          <div className='row'>
            <h3 className=''>Front End Developer with a passion for OSRS and hiking. </h3>
          </div>
        </div>
      </section>

      {/* Recent Blog */}
      <section id='recent-blog'>
        <div className='container my-5'>
          <h2><a className='link link-hover link-underline link-underline-opacity-0 link-body-emphasis' href="/posts">Recent Blog Posts</a></h2>
          <div className='row gy-2'>
            {
              post.map(posts => (
                <div key={posts.slug.current} className='p-3 rounded text-bg-light col-9'>
                  <PostPreview title={posts.title} date={dateFormatter(posts.publishedAt)} summary={posts.summary} link={posts.slug.current} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const post = await client.fetch(groq`*[_type == "post"] | order(_createdAt desc)[0...2] {
    title,
    author->,
    categories,
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