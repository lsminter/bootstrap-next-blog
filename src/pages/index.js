import { Inter } from 'next/font/google'
import PostPreview from '../../components/blog/post-preview'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      {/* Jumbotron */}
      <section id="jumbotron">
        <div className="container-fluid header-cta">
          <div className='row align-items-center h-100'>
            <div className="col col-sm-5 p-3 mx-4 bg-light rounded">
              <h1>Lucas Minter</h1>
              <p>Front End Web Development</p>
              <div className='row'>
                <a href="https://github.com/lsminter" className='col-3 icon-link icon-link-hover'>
                  <img
                    src='/images/icons/icons8-github.svg'
                    className='bi'
                    style={{width: 50, height: 50}}
                    alt="small icon for github.com"
                  />
                </a>
                <a href="https://www.linkedin.com/in/lucas-minter-67b9a097/" className='col-3 icon-link icon-link-hover'>
                  <img
                    src='/images/icons/icons8-linkedin.svg'
                    className='bi'
                    style={{width: 50, height: 50}}
                    alt="small icon for linkedin.com"
                  />
                </a>
                <a href="https://twitter.com/lucasminter" className='col-3 icon-link icon-link-hover'>
                  <img
                    src='/images/icons/icons8-twitter.svg'
                    className='bi'
                    style={{width: 50, height: 50}}
                    alt="small icon for twitter.com"
                  />
                </a>
                <a href="https://egghead.io/q/resources-by-lucas-minter" className='col-3 icon-link icon-link-hover'>
                  <img
                    src='/images/icons/egghead.svg'
                    className='bi'
                    style={{width: 50, height: 50}}
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
          <h2>Recent Blog Posts</h2>
          {/* link to whatever CMS I end up using. */}
          <div className='row my-4'>
            <PostPreview title="Post Title" date="7/31/2024" summary="Summary of the post" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id='footer'>
        <div className='container-fluid my-5'>
          <div className='row text-center'>
            <p>© Lucas Minter</p>
          </div>
        </div>
      </section>
    
    </div>
  )
}
