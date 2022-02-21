import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Responsive Weather Data UI</h1>
                <p className='search-text'> A responsive grid of content from the following API:</p>
                <p className='search-text'>
                    <p>a. https://www.weather.gov/documentation/services-web-api</p>
                    <p>b. https://api.weather.gov/radar/stations</p>
                    <p>c. Each block should contain the following information</p>
                
                </p>
                <p className='search-text'>
                    
                    <li>i. Station Name</li>
                    <li>ii. Station Identifier</li>
                    <li>iii. GPS Coordinates</li>
                    <li>iv. Altitude</li>

                </p>
                <p className='search-text'>
                    d. Results should be paginated, displaying 9 stations at a time with GPS Coordinates link to Google Map of the location, asidebar to add filtering by timezone and API Error Handling
                </p>

            </div>
        </div>
    )
}

export default Hero
