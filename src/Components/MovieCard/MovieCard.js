import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'
export default function MovieCard(props) {
    return (
        <div className='container my-4'>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className={"card-title"}>{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <Link to={`/movie/${props.id}`} className={`btn btn-${props.color}`}>Know More</Link>
                    </div>
            </div>
        </div>
    )
}
