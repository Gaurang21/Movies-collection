import React from 'react';
import style from './movies.module.css';

const Movies = (({movie})=>{
    console.log("In movies",movie);
    const image_url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const back_url = `https://image.tmdb.org/t/p/w300/${movie.back_path}`;
    //console.log(image_url);
    return(
        <div className={style.movie}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release Date : {movie.release_date}</p>
            <img className={style.image} src={image_url} alt="movie"></img>      
        </div>
    );
});

export default Movies;