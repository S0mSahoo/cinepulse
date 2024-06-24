import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard/MovieCard';
import Backup from '../Assets/backup.png'
export default function Movies(props) {
    const [movie, setMovie] = useState({
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0
    });
    let url = `https://api.themoviedb.org/3/movie/${props.title}?api_key=5ffaf87388ee32670247f16ebc9a2b16&page=${movie.page}`
    useEffect(() => {
        async function fetchMovie() {
            // console.log(url);
            let data = await fetch(url);
            let parsedData = await data.json();
            setMovie(parsedData)
            // console.log(parsedData)
        } fetchMovie();
    }, [url])
    let toPrevious = async () => {
        let url_page = `https://api.themoviedb.org/3/movie/${props.title}?api_key=5ffaf87388ee32670247f16ebc9a2b16&page=${movie.page-1}`
        let data = await fetch(url_page);
        let parsedData = await data.json();
        setMovie(parsedData)
    }
    let toNext = async () => {
        let url_page = `https://api.themoviedb.org/3/movie/${props.title}?api_key=5ffaf87388ee32670247f16ebc9a2b16&page=${movie.page+1}`
        let data = await fetch(url_page);
        let parsedData = await data.json();
        setMovie(parsedData)
    }
    return (
        <div className="container flex-column">
            <div className="row">
                {movie.results.map((element) => {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={element.id}>
                            <MovieCard color={props.color} img={element.poster_path ? `https://image.tmdb.org/t/p/w500/${element.poster_path}` : Backup} title={element.title} desc={element.overview === "" ? "Description not available. Click on Know More to read the description or to know more about the content." : element.overview} id={element.id} />
                        </div>
                    )
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button className={`btn btn-${props.color}`} onClick={toPrevious} disabled={movie.page <= 1}>Previous</button>
                <button className={`btn btn-${props.color}`} onClick={toNext} disabled={movie.page >= movie.totalPages}>Next</button>
            </div>
        </div>
    )
}
