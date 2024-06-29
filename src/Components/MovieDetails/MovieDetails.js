import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
// import Genre from './Genre';
import './MovieDetails.css'
export default function MovieDetails() {
    const param = useParams();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        async function fetchData() {
            // console.log(param.id)
            let url = `https://api.themoviedb.org/3/movie/${param.id}?api_key=5ffaf87388ee32670247f16ebc9a2b16`;
            // console.log(url);
            let data = await fetch(url);
            let parsedData = await data.json();
            setMovie(parsedData)
            console.log(parsedData)
        } fetchData();
    }, [param.id])
    return (
        <div className='container my-5'>
            <div className='div-poster'>
                <img id='poster' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
            <div className='container info'>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <div className="genre-list">
                    {movie.genres ? (
                            movie.genres.map((genre) => (
                                <p className='genre border border-2'
                                    key={genre.id}
                                >
                                    {genre.name}
                                </p>
                            ))
                    ) : (
                        ""
                    )}
                </div>
                <div id='ratings'>
                    <svg id='star' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <span>{movie.vote_average === 0 ? 'Unavailable' : movie.vote_average+'/10'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                    </svg>
                    <span>{movie.vote_count === 0 ? 'Unavailable' : movie.vote_count+' reviews'}</span>
                </div>
                <span><strong>Release Date: </strong>{movie.release_date === 0 ? 'Unavailable' : movie.release_date}</span>
                <span><strong>Runtime: </strong>{movie.runtime === 0 ? 'Unavailable' : movie.runtime + ' mins'}</span>
                <span><strong>Budget: </strong>{movie.budget === 0 ? 'Unavailable' : movie.budget + ' U$D'}</span>
                <span><strong>Revenue: </strong>{movie.revenue === 0 ? 'Unavailable' : movie.revenue + ' U$D'}</span>
                <span><strong>IMDb ID: </strong>{movie.imdb_id === 0 ? 'Unavailable' : movie.imdb_id}</span>
            </div>
        </div>
    )

}


