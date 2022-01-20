import Movie from "./Movie"
export default function Movies(props){
  const {movies=[]} = props;
  return(
    <div className="grid">
      {movies.length ? movies.map(movie => (
        <Movie key={movie.index} {...movie}/>
      )) : <h4 className="not-found">Nothing found</h4>}
    </div>
  )
}