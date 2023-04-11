import React from "react"
import { skills } from "../data"

const Skills = () => {
  return (
    <div id='skills' className='pt-10 px-3 pb-10 bg-slate-50 md:px-20'>
      <h1 className='text-2xl pt-20 text-center font-bold md:text-5xl'>
        My <span className='text-red-500'>Technical</span> Skills
      </h1>
      <div className='grid grid-cols-2 gap-5 items-center sm:grid-cols-4 md:grid-cols-8 mt-10'>
        {skills.map((skill) => {
          const { id, name, img } = skill
          return (
            <div
              key={id}
              className='bg-blue-100 flex flex-col items-center space-y-5 py-3 rounded-lg hover:bg-white hover:shadow-lg ease-in-out duration-500 z-10 reveal'
            >
              <img src={img} alt={name} className='w-1/2' />
              <h3>{name}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
