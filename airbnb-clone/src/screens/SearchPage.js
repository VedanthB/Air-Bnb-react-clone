import React from 'react'
import './SearchPage.css'
import Button from '@material-ui/core/Button';
import SearchResults from '../components/SearchResults';

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

            <SearchResults 
             img='https://a0.muscache.com/im/pictures/a8ba3a06-4bd6-47e5-8e58-a1c7c5c0dd18.jpg?im_w=720'
             location='Hostel Room in Gokarna'
             title='Sea view rooms at Nowhere Gokarna'
             description='9 guests · 3 bedrooms · 3 beds · 3 bathrooms · Wifi · Breakfast'
             star={4}
             price='$23/Night'
             total='$92 Total'
            />
            <SearchResults 
             img='https://a0.muscache.com/im/pictures/803309e2-9a28-48f1-9dcf-4b7baee239b1.jpg?im_w=720'
             location='Gokarna'
             title='Entire cabin hosted by Sita'
             description='3 guests · 2 bedrooms · 3 beds · 1 bathrooms · Wifi · Breakfast'
             star={4.2}
             price='$10/Night'
             total='$40 Total'
            />
            <SearchResults 
             img='https://a0.muscache.com/im/pictures/f50ad94d-7b2a-4d4c-a1ab-24bcc503cced.jpg?im_w=720'
             location='Gokarna'
             title='Room in hostel hosted'
             description='9 guests · 3 bedrooms · 3 beds · 3 bathrooms · Wifi · Breakfast'
             star={3}
             price='$12/Night'
             total='$48 Total'
            />
            <SearchResults 
             img='https://a0.muscache.com/im/pictures/e1420089-6435-4a74-a3ad-9f32f332fe65.jpg?im_w=720'
             location='Gokarna'
             title='Beach camping with Breakfast & Dinner @ Campcee'
             description='7 guests · 4 bedrooms · 7 beds · 4 bathrooms · Wifi · Breakfast'
             star={5}
             price='$20/Night'
             total='$90 Total'
            />
            <SearchResults 
             img='https://a0.muscache.com/im/pictures/bd3e21b7-cf70-4a7e-bc56-d4d41d17dfb9.jpg?im_w=720'
             location='Gokarna'
             title='Basic Mixed Dorms'
             description='8 guests · 4 bedrooms · 3.5 beds · 3.5 bathrooms · Wifi · Breakfast'
             star={4.8}
             price='$30/Night'
             total='$119 Total'
            />
            <SearchResults 
             img='https://a0.muscache.com/im/pictures/14f49c69-23af-42e8-9ac6-ecaa5ed6b354.jpg?im_w=720'
             location='Gokarna'
             title='Sea view rooms at Nowhere Gokarna'
             description='5 guests · 6 bedrooms · 7 beds · 3 bathrooms · Wifi · Breakfast'
             star={4}
             price='$39/Night'
             total='$150 Total'
            />
        
        </div>
    )
}

export default SearchPage
