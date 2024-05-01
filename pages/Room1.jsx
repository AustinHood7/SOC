import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room2 from './Room2'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Credentialism') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room2')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };

  return (
    <>
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
      <h1 className='text-stone-100 text-xl font-semibold'>
          You found out the TF Hailey was the one who hacked your laptops - 
          you didn't even know she could do that! 
          Neither did she until she tried! 
          But she doesn't have a degree or any kind of certificate, 
          so it's not like she could get a job as a professional hacker! 
          What is the term that puts emphasis on certificates or degrees to show that a person has a certain skill, 
          has attained a certain level of education, 
          or has met certain job qualifications?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Credentialism')}>
            Credentialism
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Credibility')}>
            Credibility
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Authentication')}>
            Authentication
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Conceivable skills')}>
            Conceivable skills
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Room1