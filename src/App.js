import React from 'react'
import { useState } from 'react'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import Navbar from './Components/Navbar'
import Search from './Components/Search'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from './Components/About';
import Movies from './Components/Movies';
import PageNotFound from './Components/PageNotFound'

export default function App() {
    const [color, setColor] = useState('primary')
    let toDark = () => {
        if (document.body.getAttribute('data-bs-theme') === 'light') {
            document.body.setAttribute('data-bs-theme', 'dark')
            setColor('success');
            document.getElementById('dark').innerHTML = 'Light Mode'
        } else {
            document.body.setAttribute('data-bs-theme', 'light')
            document.getElementById('dark').innerHTML = 'Dark Mode'
            setColor('primary');

        }
    }
    return (
        <Router basename='/cinepulse'>
            <div>
                <Navbar theme={toDark} color={color} />
                <Routes>
                    <Route path='/' element={
                        <div className="container">
                            <Movies color={color} title="now_playing" />
                        </div>
                    }></Route>
                    <Route path='' element={
                        <div className="container">
                            <Movies color={color} title="now_playing" />
                        </div>
                    }></Route>
                    <Route path='/movies/popular' element={
                        <div className="container">
                            <Movies color={color} title="popular" />
                        </div>
                    }></Route>
                    <Route path='/movies/top_rated' element={
                        <div className="container">
                            <Movies color={color} title="top_rated" />
                        </div>
                    }></Route>
                    <Route path='/movies/upcoming' element={
                        <div className="container">
                            <Movies color={color} title="upcoming" />
                        </div>
                    }></Route>
                    <Route path='/movie/:id' element={
                        <div className="container">
                            <MovieDetails />
                        </div>
                    }></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route
                        path="/search"
                        element={<Search color={color} title="search/movie" />}
                    />
                    <Route path='/*' element={<PageNotFound color={color} title="Page Not Found" />}></Route>
                </Routes>
            </div>
            <footer className="card-footer text-body-secondary mt-5 mb-3" style={{ textAlign: 'center'}}>
                © 2024{" "}
                <Link to="/" className={`link-${color==='success'?'secondary':'dark'} link-underline-opacity-0 link-underline-opacity-100-hover`}>
                    CinePulse
                </Link>
                . All Rights Reserved.
            </footer>

        </Router>
    )
}
