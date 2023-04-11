import React from "react"
import aboutImg from "../images/about-vector.png"

function AboutMe() {
  return (
    <div id='about' className='px-3 pb-20 reveal'>
      <h2 className='text-2xl pt-20 text-center font-bold md:text-5xl'>
        About <span className='text-red-500'>Me</span>
      </h2>
      <div className='w-4/5 pt-20 mx-auto flex items-center flex-col md:flex-row md:space-x-10'>
        {/* image */}
        <div className='w-full md:w-1/2'>
          <img src={aboutImg} alt='' className='w-full' />
        </div>
        {/* write up */}
        <ul className='w-full md:w-1/2 flex flex-col space-y-5 '>
          <li className='text-slate-600 text-xs sm:text-base'>
            Hello, my name is Bartholomew Ekemezie, a true visionary in the
            world of web development. As a full-stack developer, I have honed my
            skills to create stunning and responsive front-end web applications,
            while also excelling at developing robust server-side applications.
            I may have only begun my journey in web development in 2020, but my
            passion and dedication have already propelled me to the forefront of
            my field.
          </li>
          <li className='text-slate-600 text-xs sm:text-base'>
            My remarkable talent is matched only by my insatiable curiosity and
            drive to continually learn and grow. I approach each new project
            with a sense of excitement and wonder, eager to explore new
            technologies and push the boundaries of what's possible. My
            commitment to staying on the cutting edge of the industry ensures
            that I am always up-to-date with the latest trends and best
            practices, and my creativity and imagination allow me to think
            outside the box and come up with innovative solutions to complex
            problems.
          </li>
          <li className='text-slate-600 text-xs sm:text-base'>
            At Sapphire Inc., I have made a significant impact, demonstrating my
            exceptional technical abilities and passion for my work on a daily
            basis. My colleagues describe me as a team player, always willing to
            lend a helping hand and collaborate with others to achieve a common
            goal. I bring a positive energy and enthusiasm to every project,
            inspiring those around me to strive for excellence.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
