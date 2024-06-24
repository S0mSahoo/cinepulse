import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { useEffect, useState } from "react";
import React from 'react'
import Backup from '../Assets/backup.png'

export default function Search(props) {
    const [param] = useSearchParams();
    const query = param.get("q");
    const [movie, setMovie] = useState({
        page: 1,
        results: [],
        totalPages: 0,
        totalResults: 0
    });
    let url = `https://api.themoviedb.org/3/${props.title}?api_key=5ffaf87388ee32670247f16ebc9a2b16&query=${query}`
    useEffect(() => {
        async function fetchMovie() {
            console.log(url);
            let data = await fetch(url);
            let parsedData = await data.json();
            setMovie(parsedData)
        } fetchMovie();
    }, [url])

    return (
        <div>
            <h1 className="my-3" style={{textAlign: 'center'}}>
                {movie.totalResults === 0
                    ? `No result found for '${query}'`
                    : `Result for '${query}'`}
            </h1>
        <div className="container">
            <div className="row">
                {movie.results.map((element) => {
                    return (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={element.id}>
                            <MovieCard color={props.color} img={element.poster_path?`https://image.tmdb.org/t/p/w500/${element.poster_path}`:Backup} title={element.title} desc={element.overview===""?"Description not available. Click on Know More to read the description or to know more about the content.":element.overview} id={element.id} />
                        </div>
                    )
                })}
            </div>
        </div>
        </div>
    );
}
