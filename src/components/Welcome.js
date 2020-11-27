import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import happy from '../images/happy.svg'
import angry from '../images/angry.svg'
import busy from '../images/busy.svg'
import '../styles-welcome.css';


const Welcome = () => {    

    const counter = useSelector(state => state)
       
    const renderDecision = () => {
        let renderObj = {
            image : happy,
            expression: 'Awww Yeahhh!'
        }
        if (counter < 1) {
            renderObj.image = happy
            renderObj.expression = 'Awww Yeahhh!'
        }else if (counter <= 5) {
            renderObj.image = busy
            renderObj.expression = 'Alright - get to it:'
        }else {
            renderObj.image = angry
            renderObj.expression = 'You suck. Your life sucks. Your dreams suck...'
        }
        return renderObj
    }    

    return (
        <>
            <div className="main-wrapper">
                <div className="content">
                    <div className="headLine">Welcome back!</div>
                    <p className="text-upper">{`${renderDecision().expression}`}</p>
                    <p className="text">You have <span>{counter}</span> Tasks to do!</p>
                    <img className='avatar' src={renderDecision().image} alt='welcome' />
                    <div className="button-container">
                        <NavLink className='nav-link' to='/overview' >see overview</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
