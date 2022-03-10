import MovieSlider from '../MoviesSlider/index'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const comadyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="primeContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeImage"
      />
      <div className="action-container">
        <h1 className="heading-text"> Action Movies </h1>
        <MovieSlider moviesList={actionMovies} />
        <h1 className="heading-text">Comedy Movies</h1>
        <MovieSlider moviesList={comadyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
