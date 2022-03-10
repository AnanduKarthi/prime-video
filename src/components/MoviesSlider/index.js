import {Component} from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItems from '../MovieItem/index'

export default class MovieSlider extends Component {
  render() {
    const settings = {
      dots: false,

      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {moviesList} = this.props
    return (
      <div>
        <Slider {...settings}>
          {moviesList.map(eachItem => (
            <MovieItems items={eachItem} key={eachItem.id} />
          ))}
        </Slider>
      </div>
    )
  }
}
