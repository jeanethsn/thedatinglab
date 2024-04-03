"use client"
import { useState } from 'react';
import TabProfile from '../components/TabProfile';
import UserTitleProfile from "../components/UserTitleProfile";
import ProfileContent from '../components/ProfileContent';
import EventsProfileContent from '../components/EventsProfileContent';

export default function ProfilePage(){
  const [currentElement, setCurrentElement] = useState('Perfil');

  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  return (
    <main className="bg-pink-grey-bg px-[15%] py-[2%]">
        <UserTitleProfile />
        <TabProfile handleButtonClick={handleButtonClick} />

      {currentElement === 'Perfil' && <ProfileContent/>}
      {/* {currentElement === 'Matches' && <Matches/>} */}
      {currentElement === 'Eventos' && <EventsProfileContent/>}
      {/* {currentElement === 'Compability-test' && <Test/>} */}
      
    </main>
  );
};

