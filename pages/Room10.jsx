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
            Wow! You’ve almost unhacked your laptop with your sociology skills! 
            Your family will be so proud if you can get through this. 
            Speaking of family, in the study of kinship systems, societies exhibit diverse descent patterns. 
            Tracing lineage through either the father's or mother's line is often not a choice 
            families explicitly make as they are often influenced by social or economic considerations. 
            In Western cultures we mainly see that descent being traced through the father’s line with 
            female ancestors who adopted their husband’s last names making it easier to trace large family trees.
            Which descent system allows for tracing lineage through either the father's or mother's line, 
            based on factors like social status or property ownership?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Patrilineal descent')}>
          Patrilineal descent
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Matrilineal descent')}>
          Matrilineal descent
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Double descent')}>
          Double descent
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Ambilineal descent')}>
          Ambilineal descent 
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1