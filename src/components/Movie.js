export default function Movie(props){
  const {Title, Year, imdbID,Type, Poster} = props;
  return(
    <div key={imdbID} className="movie">
      <div>
        <img src={Poster} alt={Title} />
      </div>
      <div>
        <span>{Title}<i></i></span>
        <p>{Year} <span>{Type}</span></p>
      </div>
    </div>
    
    )
}