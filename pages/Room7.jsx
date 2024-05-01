import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room8 from './Room8'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Demography') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room8')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
        Speaking of not doing what you are supposed to do, have you ever heard of climate change? 
        It’s been impacting the world for a while now. 
        Various pollutants from human activity change delicate ecosystems globally. 
        Thos effects impact humans too! Neighborhoods of people can be more prone to illnesses as a 
        result of that pollution; it happens so often we call them cancer clusters. 
        Us sociologists study society, but a big backbone to that is the study of populations so we 
        can talk about what we see in conjunction with health information and migration/immigration trends.  
        What should we call the study of populations?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Anthropology')}>
          Anthropology
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Population science')}>
          Population science
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Political science')}>
          Political science
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Demography')}>
          Demography
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1