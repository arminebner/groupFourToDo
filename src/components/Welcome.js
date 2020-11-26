import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import happy from '../images/happy.svg'
import '../styles-welcome.css';


const Welcome = () => {

    let expression = 'Oh cool'

    useEffect(() => {
       //use to get globalState when page loads
    }, [])

    const counter = useSelector(state => state.counterReducer)
    console.log(counter);
    

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
