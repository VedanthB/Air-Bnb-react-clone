import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'> 
            <img 
             src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-768x279.png'
             alt=''
             className='header__icon'
            />

            <div className='header__center'>
                <input type='text' />

            </div>
        </div>
    )
}

export default Header
