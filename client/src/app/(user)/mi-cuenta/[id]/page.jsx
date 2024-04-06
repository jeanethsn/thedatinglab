"use client"
import MatchProfileContent from '../../../components/profile/MatchProfileContent';
import UserTitleProfile from '../../../components/profile/UserTitleProfile';
import TabProfile from '../../../components/profile/TabProfile';
import ProfileContent from '../../../components/profile/ProfileContent';
import { useUser } from '@/app/providers/UserProvider';
import { getUserById } from "@/app/services/user";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';


export default function ProfilePage(){
  const [currentElement, setCurrentElement] = useState('Perfil');
  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const { user } = useUser();
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
    try {
    const userData = await getUserById(params.id);
          setUserInfo(userData);
          console.log(userData);
        } catch (error) {
           setError(true);
         }
       };
  
      fetchUser();
     }, []); 
  

  return (
    <main className="bg-pink-grey-bg px-[10%] py-[4%]">


        <UserTitleProfile/>
        <TabProfile handleButtonClick={handleButtonClick} />

      {currentElement === 'Perfil' && <ProfileContent></ProfileContent>}
      {currentElement === 'Matches' && <MatchProfileContent/>} 
      {/* {currentElement === 'Eventos' && <EventsProfileContent/>} */}
      {/* {currentElement === 'Compability-test' && <Test/>} */}
      
    </main>
  );
};

