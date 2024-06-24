import React from 'react'

export default function About() {
  return (
    <div>
      <h1 className='my-5' style={{ textAlign: 'center' }}>About CinePulse</h1>
      <div className="container flex-column" style={{ gap: '2rem' }}>
        <p>
          Welcome to CinePulse, your ultimate destination for the latest and trending movies and web series! At CinePulse, we are passionate about bringing you the most comprehensive and up-to-date information on the world of entertainment. Whether you're a movie buff, a binge-watcher, or simply someone who enjoys staying in the loop with what's hot on the screen, CinePulse has something for everyone.
        </p>
        <div>

          <h4>What we Offer</h4>
          <ul>
            <li><strong>Latest Releases:</strong> Stay ahead of the curve with our curated list of the newest movie and web series releases. From blockbuster hits to indie gems, we ensure you're always in the know.
            </li>
            <li><strong>Trending Now:</strong> Discover what's currently trending in the entertainment world. Our trending section highlights the most talked-about movies and series, ensuring you never miss out on the buzz.
            </li>
            <li><strong>In-Depth Reviews:</strong> Get detailed reviews and ratings from both critics and viewers. Our reviews cover various aspects, from storytelling and performances to cinematography and soundtracks, helping you make informed choices on what to watch next.
            </li>
          </ul>
        </div>
        <span className='text-center fs-3'>Welcome to CinePulse – where your entertainment journey begins!</span>
      </div>
    </div>
  )
}
