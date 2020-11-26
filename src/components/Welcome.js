import React from 'react'
import { NavLink } from 'react-router-dom'

import '../styles-welcome.css';


const Welcome = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="content">
                    <div className="headLine">Welcome back</div>
                    <img url='{}' alt='welcome' />
                    <div className="button-container">
                        <NavLink to='/overview' >see overview</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
