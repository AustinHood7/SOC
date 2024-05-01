import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room10 from './Room10'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Stereotypes') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room10')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
            Systemic racism has implications in all social institutions- 
            workplaces, schools, families, healthcare, justice, banking. 
            As a society and a general American culture we have made strides to 
            correct the thoughts and attitudes that negatively impact all people of color 
            (those who do not identify racially as white). 
            One of the harsh realities is the impact of racism on the mental health of people of color. 
            Oftentimes they are tasked with correcting the incorrect and inaccurate opinions by 
            having conversations with the people who have them. Instead of delegating this task 
            only to people of color, educating people of any race about the injustices and 
            empowering them to speak out when hearing or witnessing acts of racism helps spread 
            a message of inclusion and equity.
            What’s the term for oversimplified ideas about groups of people?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Prejudice')}>
          Prejudice
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Culture of Prejudice')}>
          Culture of Prejudice
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Stereotypes')}>
          Stereotypes
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Discrimination')}>
          Discrimination 
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1