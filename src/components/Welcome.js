import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import happy from '../images/happy.svg'
import angry from '../images/angry.svg'
import busy from '../images/busy.svg'
import '../styles-welcome.css';


const Welcome = () => {    

    const counter = useSelector(state => state)
        
    const renderImage = () => {
        let image;
        if (counter < 1) {
            image = happy
        }else if (counter <= 5) {
            image = busy
        }else {
            image = angry
        }
        return image
    }

    const renderText = () => {
        let expression;
        if (counter < 1) {
            expression = 'Awww Yeahhh!'
        }else if (counter <= 5) {
            expression = 'Alright - get to it:'
        }else {
            expression = 'You suck. Your life sucks. Your dreams suck...'
        }
        return expression
    }    
      
    
    

    return (
        <>
            <div className="main-wrapper">
                <div className="content">
                    <div className="headLine">Welcome back!</div>
                    <p className="text-upper">{`${renderText()}`}</p>
                    <p className="text">You have <span>{counter}</span> Tasks to do!</p>
                    <img className='avatar' src={renderImage()} alt='welcome' />
                    <div className="button-container">
                        <NavLink className='nav-link' to='/overview' >see overview</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
