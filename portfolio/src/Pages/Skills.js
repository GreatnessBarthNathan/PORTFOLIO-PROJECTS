import React from "react"
import { skills } from "../data"

const Skills = () => {
  return (
    <div className='skills-container'>
      <ol className='skills'>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>
        })}
      </ol>
    </div>
  )
}

export default Skills
