import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from "./components/movieList";
import MovieListHeading from "./components/movieListHeading";
import SearchBar from "./components/searchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')

  const getMovie = async (search) => {
      const url = `http://www.omdbapi.com/?s=${search}&apikey=6015036a`

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
          setMovies(responseJson.Search);
      }
  };

  useEffect(() => {
      getMovie(search);
  }, [search])

  return (
    <div className="container-fluid movies-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading='Movies'/>
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
        <div className="row">
            <MovieList movies={movies}/>
        </div>
    </div>
  );
}

export default App;
