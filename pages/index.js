import React, { useState } from 'react';
import Room from './Room';
import { roomsData } from './roomsData';

const Index = () => {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);

  const handleCorrectAnswer = () => {
    // Set a timeout to wait for 2 seconds before moving to the next room
    setTimeout(() => {
      if (currentRoomIndex < roomsData.length - 1) {
        setCurrentRoomIndex(currentRoomIndex + 1);  // Move to the next room
      } else {
        // Optionally handle the end of the room list (e.g., show a completion message or redirect)
      }
    }, 2000);  // Delay of 2 seconds matches the toast autoClose time
  };

  return (
    <Room
      roomData={roomsData[currentRoomIndex]}
      onCorrectAnswer={handleCorrectAnswer}
    />
  );
};

export default Index;
