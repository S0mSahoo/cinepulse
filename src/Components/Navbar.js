import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Logo from '../Assets/logo.png'

export default function Navbar(props) {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const queryTerm = search;
        // event.target.reset();
        return navigate(`/search?q=${queryTerm}`);
    };
    const toChange = (event) => {
        setSearch(event.target.value);
    }
    const toActive = (event)=>{
        event.target.className = 'nav-link active'?'nav-link':'nav-link active';
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.color === 'primary' ? 'secondary' : 'dark'}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                            CinePulse
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" onClick={toActive} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={toActive} to="/movies/popular">Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={toActive} to="/movies/top_rated">Top Rated</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={toActive} to="/movies/upcoming">Upcoming</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={toActive} to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onSubmit={handleSubmit} value={search} onChange={toChange} />
                            <button className={`btn btn-outline-${props.color === 'primary' ? 'success' : 'light'}`} type="submit" onClick={handleSubmit}>Search</button>
                        </form>
                        <button id='dark' className={`btn btn-md btn-outline-${props.color === 'primary' ? 'success' : 'light'} m-2`} type="submit" onClick={props.theme}>Dark Mode</button>
                    </div>
                </div>
            </nav>
            <hr className='m-0 border-2' />
        </div>
    )
}
