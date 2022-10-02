import React from 'react'
import {Link} from 'react-router-dom'

function About () {
    return <aside className='about'>
        <p>Special meals aims to help you find meals for the ingredients you have, no matter how small they are. We have compiled videos to help you learn how to prepare meals for the ingredients you have, with well detailed instructions to guide you to accomplishing each meal. Enjoy...</p>
        <h4>Real food doesn't have ingredients, real food is ingredients.</h4>
        <h5>- Jamie Oliver</h5>
        <Link to='/'>Back To Home</Link>
    </aside>
}

export default About