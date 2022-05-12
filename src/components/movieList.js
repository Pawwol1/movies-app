import React from 'react';

function MovieList({movies, favourite, handleFavouriteClick}) {
    const FavouriteComponent = favourite
    return (
        <>
            {movies.map((movie, index) => (
                <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt='movie'/>
                    <div onClick={() => handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent/>
                    </div>
                </div>

            ))}
        </>
    );
}

export default MovieList;