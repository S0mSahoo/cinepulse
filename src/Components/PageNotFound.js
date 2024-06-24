import React, { useEffect } from 'react'
import PageNotFoundImage from '../Assets/pagenotfound.png'
import { Link } from 'react-router-dom'

export default function PageNotFound(props) {
    let myStyle = {
        borderRadius: '20px',
        height: '350px',
        objectFit: 'cover'
    }
    useEffect(() => {
        document.title = `${props.title}`
    })
    return (
        <div>
            <h1 className='my-4' style={{ textAlign: 'center', fontSize: '80px' }}>Oops!</h1>
            <div className="container flex-column" style={{ gap: '0' }}>
                <div className="container my-3">
                    <img style={myStyle} src={PageNotFoundImage} alt="" />
                </div>
                <div className="container my-3">
                    <Link to='/'>
                        <button className="btn btn-lg btn-primary">Back to Main Page</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
