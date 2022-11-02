import React from "react"
import { skills } from "../data"

const Skills = () => {
  return (
    <div id='skills'>
      <h1>My Skills</h1>
      <div className='skills-container'>
        <ol className='skills'>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>
          })}
        </ol>
      </div>
    </div>
  )
}

export default Skills
