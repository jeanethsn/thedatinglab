"use client"
import { useState } from 'react';
import TabProfile from '../components/TabProfile';
import UserTitleProfile from "../components/UserTitleProfile";

export default function ProfilePage(){
  const [currentElement, setCurrentElement] = useState('A');

  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  return (
    <main className="bg-pink-grey-bg p-[5%]">
        <UserTitleProfile />
        <TabProfile handleButtonClick={handleButtonClick} />

      {/* {currentElement === 'A' && }
      {currentElement === 'B' && <ElementB />}
      {currentElement === 'C' && <ElementC />} */}
    </main>
  );
};

