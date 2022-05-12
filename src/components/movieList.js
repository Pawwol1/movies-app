import React from 'react';

function MovieList({movies}) {
    return (
        <>
            {movies.map((movie, index) => (
                <div key={movie.imdbID} className="d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt='movie'/>
                </div>
            ))}
        </>
    );
}

export default MovieList;