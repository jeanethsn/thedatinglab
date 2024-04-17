"use client";
import MatchProfileContent from "@/app/components/profile/MatchProfileContent";
import UserTitleProfile from "@/app/components/profile/UserTitleProfile";
import TabProfile from "@/app/components/profile/TabProfile";
import ProfileContent from "@/app/components/profile/ProfileContent";
import { getProfileById } from "@/app/services/user";
import { useEffect, useState } from "react";
import { Loading } from "@/app/components/events/CardList";
import { useUser } from "@/app/providers/UserProvider";
import { useSearchParams, useRouter } from "next/navigation";

import withAuthentication from "@/app/components/hoc/withAuthentication";
import MyEvents from "@/app/components/profile/MyEvents";

function ProfilePage() {
  const [currentElement, setCurrentElement] = useState("Perfil");
  const handleButtonClick = (element) => {
    setCurrentElement(element);
  };

  const { combineUserDataAndProfile, user } = useUser();
  const profileId = user?.profile_id && user?.profile_id;
  const preferenceId = user?.preference_id && user?.preference_id;

  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (profileId) {
          const userData = await getProfileById(profileId);
          setUserInfo(userData);
          combineUserDataAndProfile(userData);
          // router.refresh();
          setIsLoading(false);
        } else {
          setError(true); // Manejar el caso en que profileId sea undefined
        }
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };
    fetchUser();
  }, [profileId]);

  if (isLoading) return <Loading />;

  return (
    <main className="md:min-h-screen bg-pink-grey-bg px-[10%] lg:px-[20%] py-[4%]">
      <UserTitleProfile />
      <TabProfile handleButtonClick={handleButtonClick} />
      {currentElement === "Perfil" && (
        <ProfileContent userData={userInfo} userId={user.id} />
      )}
      {currentElement === "Matches" && <MatchProfileContent />}
      {currentElement === "Eventos" && <MyEvents />}

    </main>
  );
}

export default withAuthentication(ProfilePage);
