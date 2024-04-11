import { useState, useContext, createContext, useEffect } from "react";
import { getProfileById } from "@/app/services/user";

const UserContext = createContext({
  user: {},
  isAdmin: false,
  isLoading: false,
});

export const useUser = () => useContext(UserContext);
const HOME_ROUTE = "/";
export default function UserProvider({ children }) {
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(loggedUser?.user || {});
  const [isAdmin, setIsAdmin] = useState(loggedUser?.user?.isAdmin || false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (loggedUser) {
      setIsLoading(false);
    }
  }, [loggedUser]);

  useEffect(() => {
    const callProfile = async () => {
      const response = await getProfileById(profileId);
      combineUserDataAndProfile(response);
    };

    try {
      if (loggedUser.profile_id) {
        callProfile();
      }
    } catch (error) {
      console.log("algo ha ido mal", error);
    }
  }, [loggedUser]);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    setIsAdmin(false); // Reset isAdmin state on logout
  };

  const handleUserLogin = (data) => {
    console.log({ data });
    setUser(data);
    setIsAdmin(data.isAdmin); // Set isAdmin state based on user data
  };

  const combineUserDataAndProfile = (data) => {
    const { user, token } = JSON.parse(localStorage.getItem("user"));
    const userDataAndProfile = {
      token,
      user: {
        ...user,
        ...data.profile.user,
        profile_image: data.profile.image,
      },
    };

    setUser({ ...userDataAndProfile.user });
    localStorage.setItem("user", JSON.stringify(userDataAndProfile));
  };

  const updateUserData = (profileID) => {
    const { user, token } = JSON.parse(localStorage.getItem("user"));
    const userDataAndProfile = {
      token,
      user: {
        ...user,
        profile_id: profileID,
      },
    };
    setUser({ ...userDataAndProfile.user });

    localStorage.setItem("user", JSON.stringify(userDataAndProfile));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isLoading,
        handleUserLogout,
        handleUserLogin,
        combineUserDataAndProfile,
        updateUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
