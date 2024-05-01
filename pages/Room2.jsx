import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room3 from './Room3'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Preliminary stage') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room3')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };

    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
            Anyone can access social media now! There’s TikTok, SnapChat, Instagram, Twitter/X, and so many more.
            One of the many uses of social media is the sharing of information with each other!
            It might be recipes or how to beat levels in video games.
            Sometimes, videos or pictures can be shared regarding social issues.
            No matter where the media is shared, its viewers become enticed by it.
            This can elicit its viewers to find news articles or look towards more 
            credible sources for information about what’s going on.
            Which stage of Blumer and Tilly’s social movement outline represents this?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Technological response stage')}>
          Technological response stage
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Media response stage')}>
          Media response stage
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Coalescence stage')}>
          Coalescence stage
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Preliminary stage')}>
          Preliminary stage
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1