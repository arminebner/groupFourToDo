import React from 'react'
import { NavLink } from 'react-router-dom'
import happy from '../images/happy.svg'


import '../styles-welcome.css';


const Welcome = () => {

    let expression = 'Oh cool'
    let counter = 0


    return (
        <>
            <div className="main-wrapper">
                <div className="content">
                    <div className="headLine">Welcome back</div>
                    <p className="text">{`${expression}! You have ${counter} Tasks to do!`}</p>
                    <img className='avatar' src={happy} alt='welcome' />
                    <div className="button-container">
                        <NavLink className='nav-link' to='/overview' >see overview</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
