import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room4 from './Room4'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Commodification') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room4')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
            Conflict theorists claim that due to capitalism’s pursuit of profit,
            things that would not typically cost money would become items to be bought and sold.
            Think about tourist buses “observing” Amish culture. 
            What term best fits this idea?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Overcharging')}>
          Overcharging
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Commodification')}>
          Commodification
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Increasing Profit Margins')}>
          Increasing Profit Margins
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Capitalism')}>
          Capitalism
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1