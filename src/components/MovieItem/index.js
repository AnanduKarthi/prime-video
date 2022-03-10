import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItems = props => {
  const {items} = props
  const {videoUrl, thumbnailUrl} = items
  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="model-container">
              <button
                className="close-button"
                type="button"
                testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <div className="movie-player-container">
                <ReactPlayer url={videoUrl} />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItems
