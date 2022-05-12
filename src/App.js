import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import MovieList from "./components/movieList";
import MovieListHeading from "./components/movieListHeading";
import SearchBar from "./components/searchBar";
import addFavourites from "./components/addFavourites";
import RemoveFavourites from "./components/removeFavourites";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [favourites, setFavourites] = useState([]);

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

  useEffect(() =>{
      const movieFavourites = JSON.parse(localStorage.getItem('movies-app-favourites'));
      setFavourites(movieFavourites)
  }, [])

  const saveInLocalStorage = items => {
      localStorage.setItem('movies-app-favourites', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveInLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
      const newFavouriteList = favourites.filter(favourite =>
      favourite.imdbID !== movie.imdbID);
      setFavourites(newFavouriteList);
      saveInLocalStorage(newFavouriteList);
  }

  return (
    <div className="container-fluid movies-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading='Movies'/>
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
        <div className="row">
            <MovieList movies={movies} handleFavouriteClick={addFavouriteMovie} favourite={addFavourites}/>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
            <MovieListHeading heading='Favourites'/>
        </div>
        <div className="row">
            <MovieList movies={favourites} handleFavouriteClick={removeFavouriteMovie} favourite={RemoveFavourites}/>
        </div>
    </div>
  );
}

export default App;
