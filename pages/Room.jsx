import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Room = ({ roomData, onCorrectAnswer }) => {
  const { question, answers, correctAnswer } = roomData;

  const clickHandler = (answerName) => {
    if (answerName === correctAnswer) {
      toast.success('Correct!', { autoClose: 2000 });
      onCorrectAnswer();  
    } else {
      toast.error('Incorrect. Try again.', { autoClose: 2000 });
    }
  };

  return (
    <div className='h-[100vh] flex flex-col justify-center items-center bg-gradient-radial from-yellow-800 to-red-900 px-[20%] gap-8'>
      <h1 className='text-stone-100 text-xl font-semibold'>{question}</h1>
      <div className='flex gap-8'>
        {answers.map((answer, index) => (
          <div key={index} className="flex flex-col items-center">
            {answer.name ? <img
              src={answer.imageSrc}
              alt={answer.name}
              className="w-32 h-32 object-cover rounded-lg shadow-lg hover:shadow-2xl"
              onClick={() => clickHandler(answer.name)}
              style={{ cursor: 'pointer' }}
            /> : 
            <button key={index} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => clickHandler(answer)}>
            {answer}
          </button>
        }

          </div>
        ))}
      </div>
      <div class="font-tangerine text-xl font-bold absolute left-10 bottom-6">
        Hailey De Los Santos
      </div>
      <div class="font-tangerine text-xl font-bold absolute right-10 bottom-6">
        Arizona State University
      </div>
      <ToastContainer />
    </div>
  );
};

export default Room;
