import React from 'react'

function Hero() {
    return (
        <main className='hero container'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. WE PRESENT THE LATEST BOLDFIRE SERIES COLLECTION. </p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Explore</button>
            </div>

            <div className='shopping'>
                <p>Also availabe on</p>
                <div className='brand-icons'>
                    <img src="../../public/images/flipkart.png" alt="flipkart" />
                    <img src="../../public/images/amazon.png" alt="amazon" />
                </div>
            </div>
            </div>
            <div className='hero-image'>
                <img src="../../public/images/shoe_image.png" alt="hero-image" />

            </div>
        </main>
    )
}

export default Hero
