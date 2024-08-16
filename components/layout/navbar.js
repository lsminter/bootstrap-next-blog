

export default function NavBar () {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Lucas Minter</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarItems">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <a class="nav-link active" href="/">Home</a>
            <a class="nav-link" href="/posts">Posts</a>
            <a class="nav-link" href="/projects">Projects</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}