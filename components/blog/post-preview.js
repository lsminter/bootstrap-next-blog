export default function PostPreview({title, date, summary}) {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex gap-3">
          <a class="icon-link icon-link-hover link-underline link-underline-opacity-0 link-body-emphasis" href="#">
          <h3>{title}</h3>
            <p class="bi">👉</p>          
          </a>
        </div>
        <h4>{date}</h4>
        <p>{summary}</p>
      </div>
    </div>
  )
}