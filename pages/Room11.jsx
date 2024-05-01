import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room11 from './Room11'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Ambilineal descent') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room11')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
        Congratulations! You’ve proven you know SOC 101 and are ready to take the final!

        Beyond the final, we hope that what you have learned in this course has widened your view of society. No matter the field you chose to enter, understanding social life, social change, causes of human behavior, and consequences of human action can impact whatever coworkers, clients or patients you are interacting with.

        How can you apply what you’ve learned about sociology in your relationships, education, work, or beyond to make the world a better place?

        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Patrilineal descent')}>
          Patrilineal descent
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1