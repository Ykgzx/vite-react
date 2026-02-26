// import { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import TrendingSong from '../components/Trendingsong';
import Popularartists from '../components/Popularartists';
import Popularalbums from '../components/Popularalbums';

function Home() {
  
  const slideImages = [
    {
      url: 'https://i.ytimg.com/vi/XaTFvLSP1oI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAhqIB6zQTEtnuf4U-GNGo0AWWlaA',
      caption: 'Go to next content'
    },
    {
      url: 'https://i.ytimg.com/vi/WKZO-CWeOVA/maxresdefault.jpg',
    },
    {
      url: 'https://api.sepsakon.com/uploads/1737385059284-yungkaiblue1.jpg',
    },
  ];

  return (
    <>
      <div className='min-h-screen text-white bg-gray-900 pt-22 md:pt-22 px-4'>
        <div>
          <Slide>
          {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='flex items-center justify-center h-96 bg-cover relative'>
                  
                </div>
              </div>
            ))} 
          </Slide>
        </div>
        <TrendingSong />
        <Popularartists />
        <Popularalbums />
      </div>
    </>
  )
}

export default Home
