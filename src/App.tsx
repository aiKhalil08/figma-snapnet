import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from './assets/pictures/image.png'

function App() {
  return (
    <div className='h-full w-full bg-[#F6F2FF] flex'>
        <div className='hidden lg:grid h-full flex-1 place-items-center p-20'>
            <div>
                <img src={image} alt="background image" className='w-[440px] h-[600px]' />
            </div>
        </div>
        <div className='h-full flex-1 grid place-items-center'>
            <div className='text-center lg:text-right max-w-lg p-10 md:p-20'>
                <h1 className='font-bold text-4xl lg:text-6xl text-[#240D57]'>
                    Imagine if
                    <br />
                    <span className="bg-gradient-to-r from-[#8456EC] to-[#E87BF8] inline-block text-transparent bg-clip-text">Snapchat</span> 
                    <br />
                    had events.
                </h1>
                <p className='font-light text-2xl text-[#4F4F4F] pt-4'>
                    Easily host and share events with your friends across any social media.
                </p>
                <div className='block lg:hidden'>
                    <img src={image} alt="background image" className='w-[440px] h-[600px]' />
                </div>
                <button type="button" className='mt-8 bg-gradient-to-r from-[#8456EC] to-[#E87BF8] inline-block rounded-[10px] px-4 py-2 max-w-80 lg:w-80 text-[#FFFFFF] font-bold text-base md:text-xl whitespace-nowrap'>🎉 Create my event</button>
            </div>
        </div>
    </div>
  );
}

export default App;
