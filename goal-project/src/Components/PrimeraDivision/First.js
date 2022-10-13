import React from "react"
import { primeraDivision } from "../../data/PrimeraDivision"
import { BsClock } from "react-icons/bs"
import { BiMessageMinus } from "react-icons/bi"
import { FaArrowRight } from "react-icons/fa"

const First = () => {
  const { img, title, txt, time, one, two, response } = primeraDivision.first

  return (
    <div className='first'>
      <img src={img} alt='' />
      <div className='first-content'>
        <div className='first-btns'>
          <a href='#'>{one}</a>
          <a href='#'>{two}</a>
        </div>
        <h2>{title}</h2>
        <p>{txt}</p>
        <div className='first-base'>
          <div className='times'>
            <p>
              <BsClock />
              {time}
            </p>
            <p>
              <BiMessageMinus /> {response}
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

export default First
