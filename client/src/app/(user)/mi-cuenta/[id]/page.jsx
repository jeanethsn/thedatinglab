"use client"
import MatchProfileContent from '../../../components/profile/MatchProfileContent';
import UserTitleProfile from '../../../components/profile/UserTitleProfile';
import TabProfile from '../../../components/profile/TabProfile';
import ProfileContent from '../../../components/profile/ProfileContent';
import { getUserById } from "@/app/services/user";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';
import { Loading } from "@/app/components/events/CardList";


export default function ProfilePage() {
  const [currentElement, setCurrentElement] = useState('Perfil');
  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(params.id);
        setUserInfo(userData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchUser();
  }, []);
  if (isLoading) return <Loading />;

  return (
    <main className="bg-pink-grey-bg px-[10%] py-[4%]">
      <UserTitleProfile />
      <TabProfile handleButtonClick={handleButtonClick} />
      {currentElement === 'Perfil' && <ProfileContent userData={userInfo} />}
      {currentElement === 'Matches' && <MatchProfileContent />}
    </main>
  );
};

