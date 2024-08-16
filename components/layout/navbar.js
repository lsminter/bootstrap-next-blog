

export default function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Lucas Minter</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarItems">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/posts">Posts</a>
            <a className="nav-link" href="/projects">Projects</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}