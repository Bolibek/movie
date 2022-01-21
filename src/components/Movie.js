export default function Movie(props){
  const {Title, Year, imdbID,Type, Poster} = props;
  return(
    <div key={imdbID} className="card movie">
      <div className="card-image">
        <img className="activator" src={Poster} alt={Title} />
      </div>
      <div className="card-content">
        <span className="card-title activator">{Title}<i></i></span>
        <p className="left">{Year} </p><span className="right">{Type}</span>
      </div>
    </div>
    
    )
}