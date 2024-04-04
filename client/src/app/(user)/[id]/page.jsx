"use client"
import { useState } from 'react';
import MatchProfileContent from '../../components/profile/MatchProfileContent';
import UserTitleProfile from '../../components/profile/UserTitleProfile';
import TabProfile from '../../components/profile/TabProfile';
import ProfileContent from '../../components/profile/ProfileContent';


export default function ProfilePage(){
  const [currentElement, setCurrentElement] = useState('Perfil');

  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  return (
    <main className="bg-pink-grey-bg px-[10%] py-[4%]">
        <UserTitleProfile/> {/*userId={userId}*/}
        <TabProfile handleButtonClick={handleButtonClick} />

      {currentElement === 'Perfil' && <ProfileContent/>}
      {currentElement === 'Matches' && <MatchProfileContent/>} 
      {/* {currentElement === 'Eventos' && <EventsProfileContent/>} */}
      {/* {currentElement === 'Compability-test' && <Test/>} */}
      
    </main>
  );
};

