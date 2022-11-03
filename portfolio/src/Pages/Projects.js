import React from "react"
import { projects } from "../data"

function Projects() {
  return (
    <div id='projects'>
        <h1>Projects</h1>
      <div className='projects'>
        {projects.map((project) => {
          const { id, name, url, img } = project
          return (
            <div key={id} className='single-project'>
              <a href={url} target='_blank'>
                <img src={img} alt={name} />
              </a>
              <h3>{name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
