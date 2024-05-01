import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Room6 from './Room6'
import { useRouter } from 'next/router';

const Room1 = () => {

    const [currentRoom, setCurrentRoom] = useState(0);
    const router=useRouter()
  const clickHandler = (answer) => {
    if (answer === 'Homophobia') {
      toast.success('Correct!', { autoClose: 2000 });
      router.push('/Room6')
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };
  
    return (
      <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-700 to-red-900 px-[30%] gap-8'>  
        <h1 className='text-stone-100 text-xl font-semibold'>
            Let’s think about the past! 
            Flashback to the 1960s; pretend you’re in the movie Grease or West Side Story. 
            At this period in time, it was expected that everyone be doing gender. 
            A term we’ve gone over is heteronormativity, 
            but it means the promotion of heterosexuallity as the “normal” sexual orientation. 
            This meant that certain ideas around gender and sexuality were expected to be upheld by everyone. 
            Even today there can be a sense of heteronormativity. 
            Only within the last decade did TV and movies really start to feature openly LGBTQ characters 
            in leading roles regularly. Before that, the romantic interests would only be a heterosexual 
            couple featuring a man and women, doing their respective genders assigned at birth. 
            Although other sexualities exist, heteronormativity often overlooks or disregards them. 
            Gender roles and gender socialization are one of the constructs of heteronormativity.
            What might be a result of heteronormativity? 
        </h1>
        <div className='flex gap-8'> 
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Homophobia')}>
          Homophobia
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Misogyny')}>
          Misogyny
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Sexism')}>
          Sexism
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler('Transgenderphobia')}>
          Transgenderphobia
          </button>
        </div>
        <ToastContainer />
      </div>
    );
}

export default Room1