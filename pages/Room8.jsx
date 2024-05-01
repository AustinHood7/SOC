import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room9 from './Room9'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Differential association theory') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room9')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
            A lot of times parents are worried about their kids making “bad” friends. 
            They might tell you who to hang out with or not to hang out with. 
            Maybe they’ll judge you or tell you not to see them anymore. 
            These feelings might not be limited to friends; 
            maybe specific family members they view as “bad” influences. 
            The idea of calling someone a “bad” influence stems from the idea that 
            they are behaving outside of societal norms. They might dress, talk, 
            or do things that would cause people to believe they are deviant and 
            may influence those around them to be deviant as well. 
            Which theory best explains why that might be?
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Differential association theory')}>
          Differential association theory
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Parental socialization theory')}>
          Parental socialization theory
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Labeling theory')}>
          Labeling theory
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Control theory')}>
          Control theory 
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1