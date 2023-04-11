import React from "react"
import MyPicture from "../images/my-picture.png"
import myImg from "../images/my-img.jpg"

function Home() {
  return (
    <section
      id='home'
      className='px-2 bg-blue-100 h-screen flex flex-col-reverse justify-center items-center space-x-0 md:flex-row md:space-x-10 md:px-3'
    >
      {/* intro content */}
      <div className='mt-5 md:mt-0 w-full text-center md:w-auto md:text-left'>
        <h3 className=' mb-2 font-bold md:text-2xl sm:text-3xl  md:mb-5'>
          Hello, My name is
        </h3>
        <h1 className='mb-2 text-2xl font-bold sm:text-5xl md:mb-5'>
          Bartholomew Ekemezie
        </h1>
        <p className='text-sm text-red-600 font-bold sm:text-3xl '>
          A Modern Software Developer,
        </p>
        <p className='text-sm text-red-600 font-bold sm:text-3xl'>
          with a passion for learning, and building.
        </p>
      </div>
      {/* intro image */}
      <div className='w-60 flex justify-center items-center relative'>
        <img src={myImg} alt='my-image' className='w-full rounded-full' />
      </div>
    </section>
  )
}

export default Home
