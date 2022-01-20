export default function Header(){
  return(
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="https://fbnmovies.netlify.app" className="brand-logo left">React</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://fbnmovies.netlify.app">Movie</a></li>
        </ul>
      </div>
    </nav>
  )
}