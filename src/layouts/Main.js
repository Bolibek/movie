import React, {useState, useEffect} from 'react';

import Movies from "../components/Movies";
import Search from "../components/Search";
import Loader from "../components/Loader";
export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const searchMovies = (str, type="all") => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=92bb83ea&s=${str}${type !== "all" ? `&type=${type}` : ""}&page=2`)
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setMovies(data.Search);
        
      })
  }
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=92bb83ea&s=panda")
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setLoading(false);
      } )
      
  }, []);

  return (
      <main className="container content">
         <Search searchMovies={searchMovies}/>
         {loading ?  <Loader /> : (<Movies movies={movies} />)}
      </main>
  )
}