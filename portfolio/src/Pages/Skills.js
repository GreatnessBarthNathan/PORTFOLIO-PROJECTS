import React from "react"
import { skills } from "../data"

const Skills = () => {
  return (
    <div id='skills'>
      <h1>My Skills</h1>
      <div className='skills-container '>
        {skills.map((skill) => {
          const { id, name, img } = skill
          return (
            <div key={id} className='skills reveal'>
              <img src={img} alt={name} />
              <h3>{name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
