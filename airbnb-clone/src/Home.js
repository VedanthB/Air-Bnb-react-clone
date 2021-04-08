import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return (
        <div className='home' >
            <Banner />

            <div className='home__section'>
                <Card
                 src='https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480'
                 title='Online Experiences' 
                 description='Unique activities we can do together,
                 led by a world of hosts.'
                />
                <Card
                src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480'
                title='Unique Stays' 
                description='Spaces that are more than just a place to sleep.'
                 />
                <Card
                 src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480'
                 title='Entire Homes' 
                 description='Comfortable private places, with room for friends and family'
                 />
            </div>

            <div className='home__section'>
                <Card 
                 src='https://a0.muscache.com/im/pictures/ba8f35c4-b259-4bf6-a007-97c31d49d202.jpg?im_w=720'
                 title='Paro House' 
                 description='4 guests · 3 bedroom · 6 bed · 4 bathroom'
                 price='$23/Night'
                />
                <Card 
                 src='https://a0.muscache.com/im/pictures/642d2e0c-2aa3-4ecd-b199-70ebdcc7168c.jpg?im_w=720'
                 title='Hatch-IT' 
                 description='3 guests · 3 bedroom · 3 bed · 1.5 bathroom'
                 price='$10/Night'
                />
                <Card 
                 src='https://a0.muscache.com/im/pictures/4b4b75b0-35ef-4471-b146-dbd4e9ee6ba1.jpg?im_w=720'
                 title='Private Shack in Gokarna' 
                 description='2 guests · 1 bedroom · 1 bed · 1 bathroom '
                 price='$15/Night'
                />
            </div>
        </div>
    )
}

export default Home
