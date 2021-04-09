import React from 'react'
import './SearchPage.css'
import Button from '@material-ui/core/Button';

function SearchPage() {
    return (
        <div className='searchPage' >
            <div className='searchPage__info'>
                <p>69 Stays · 26 Aug to 30 Aug · 2 Guests </p>
                <h1>Stays Nearby</h1>

                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Room and beds</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>More Filters</Button>
            </div>
        </div>
    )
}

export default SearchPage
