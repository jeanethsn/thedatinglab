"use client"
import { useState } from 'react';
import TabProfile from '../components/profile/TabProfile';
import UserTitleProfile from "../components/profile/UserTitleProfile";
import ProfileContent from '../components/profile/ProfileContent';
import MatchProfileContent from '../components/profile/MatchProfileContent';

export default function ProfilePage(){
  const [currentElement, setCurrentElement] = useState('Perfil');

  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  return (
    <main className="bg-pink-grey-bg px-[10%] py-[4%]">
        <UserTitleProfile />
        <TabProfile handleButtonClick={handleButtonClick} />

      {currentElement === 'Perfil' && <ProfileContent/>}
      {currentElement === 'Matches' && <MatchProfileContent/>} 
      {/* {currentElement === 'Eventos' && <EventsProfileContent/>} */}
      {/* {currentElement === 'Compability-test' && <Test/>} */}
      
    </main>
  );
};

