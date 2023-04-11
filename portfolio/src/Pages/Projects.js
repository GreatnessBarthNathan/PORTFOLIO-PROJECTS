import React from "react"
import { projects } from "../data"

function Projects() {
  return (
    <div id='projects' className='px-3 bg-blue-100 pb-20'>
      <h1 className='text-2xl pt-20 text-center font-bold md:text-5xl'>
        My <span className='text-red-500'>Projects</span>
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pt-20'>
        {projects.map((project) => {
          const { id, name, url, img } = project
          return (
            <div
              key={id}
              className='shadow-2xl rounded-lg overflow-hidden text-center bg-slate-50 hover:skew-y-3 ease-in-out duration-500 reveal'
            >
              <a href={url} target='_blank'>
                <img src={img} alt={name} />
              </a>
              <h3 className='p-2 font-bold text-sm'>{name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
