import React from "react"
import goalVideo from "../../videos/goal-video.mp4"
import "../../styles/videos.css"
import { BsClock } from "react-icons/bs"
import { BiMessageMinus } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"
import { useGlobalContext } from "../../context/index"

const Videos = () => {
  const { removeSubmenu } = useGlobalContext()
  return (
    <div className='videos' onMouseOver={removeSubmenu}>
      <h1>Videos</h1>
      <video
        className='video-container'
        type='video/mp4'
        muted
        controls
        autoPlay
        loop
      >
        <source src={goalVideo} />
      </video>
      <div className='first-content'>
        <div className='first-btns'>
          <a href='#'>Liverpool</a>
          <a href='#'>Premier League</a>
        </div>
        <h2>All Today's Top Premier League Videos</h2>
        <p>
          Our Premier League football channel has all the latest highlights and
          Football content you need
        </p>
        <div className='first-base'>
          <div className='times'>
            <p>
              <BsClock />
              07/Oct/2022
            </p>
            <p>
              <BiMessageMinus />
              32
            </p>
          </div>
          <h3 className='full-story'>
            Full Story <FaArrowRight id='right' />
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Videos
