import React from 'react'

export const Footer = () => {
  return (
    <footer className='grid md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold cursor-not-allowed'>ABOUT</h5>
            <p className='cursor-not-allowed'>How Airbnb Works</p>
            <p className='cursor-not-allowed'>Newsroom</p>
            <p className='cursor-not-allowed'>Investors</p>
            <p className='cursor-not-allowed'>Airbnb Plus</p>
            <p className='cursor-not-allowed'>Airbnb luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray800'>
            <h5 className='font-bold cursor-not-allowed'>COMMUNITY</h5>
            <p className='cursor-not-allowed'>Accessibility</p>
            <p className='cursor-not-allowed'>This is not a real site</p>
            <p className='cursor-not-allowed'>Its a pretty awesome clone</p>
            <p className='cursor-not-allowed'>Referrals accepted</p>
            <p className='cursor-not-allowed'>WadOfTheJah</p>
        </div>

        <div className='space-y-4 text-xs text-gray800'>
            <h5 className='font-bold cursor-not-allowed'>HOST</h5>
            <p className='cursor-not-allowed'>Jawad Hanif</p>
            <p className='cursor-not-allowed'>Presents</p>
            <p className='cursor-not-allowed'>Airbnb</p>
            <p className='cursor-not-allowed'>Hundreds of people</p>
            <p className='cursor-not-allowed'>Join Now</p>
        </div>

        <div className='space-y-4 text-xs text-gray800'>
            <h5 className='font-bold cursor-not-allowed'>SUPPORT</h5>
            <p className='cursor-not-allowed'>Help Centre</p>
            <p className='cursor-not-allowed'>Trust & Safety</p>
            <p className='cursor-not-allowed'>Say Hi Youtube</p>
            <p className='cursor-not-allowed'>Easter Eggs</p>
            <p className='cursor-not-allowed'>For the Win</p>
        </div>
    </footer>
  )
}
