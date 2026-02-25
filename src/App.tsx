import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-scroll';

function App() {
  const [count, setCount] = useState(0)
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Go to next content'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    },
  ];

  return (
    <>
      <Navbar />
      <div className='min-h-screen text-white bg-gray-900 pt-20 md:pt-20 px-20'>
        <div className="">
          <Slide>
          {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})` }} className='flex items-center justify-center h-96 bg-cover relative'>
                  <Link to="section1" smooth={true} duration={500}>
                    <span className='p-5 bg-gray-100 text-black'>{slideImage.caption}</span>
                  </Link>
                </div>
              </div>
            ))} 
          </Slide>
        </div>
        <div className='pt-10'>
          <div className='flex flex-col gap-4 items-center justify-center items-center border border-2 p-4 rounded-md bg-gray-800'>
            <h1 className=''>No Idia</h1>
            <p>Current count: {count}</p>
            <div className='flex gap-4 items-center justify-center'>
              <button onClick={() => setCount(count + 1)} className='bg-green-500 p-2 rounded-md'>
                Increment
              </button>
              <button onClick={() => setCount(count - 1)} className='bg-red-500 p-2 rounded-md'>
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
