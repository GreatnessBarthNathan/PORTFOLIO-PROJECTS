import React from "react"
import moment from "moment"
import { BsTrophyFill } from "react-icons/bs"

const Article = ({ club, country, stadium, length }) => {
  return (
    <div className='article'>
      <h1>{club}</h1>
      <p>Country: {country}</p>
      <p>Stadium: {stadium}</p>
      <div className='trophy'>
        {Array.from({ length }, (_, index) => (
          <BsTrophyFill key={index} />
        ))}
        <p id='length'>= {length}</p>
      </div>
    </div>
  )
}

export default Article
