import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext({
  user: {},
  isAdmin: false,
  isLoading: false,
});

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setUser({});
    setIsAdmin(false); // Reset isAdmin state on logout
  };

  const handleUserLogin = (data) => {
    setUser(data);
    setIsAdmin(data.isAdmin); // Set isAdmin state based on user data
  };

  const combineUserDataAndProfile = (data) => {
    const { user, token } = JSON.parse(localStorage.getItem("user"));

    // Objeto con la data fusionada entre el user y el profile

    const userDataAndProfile = {
      token,
      user: {
        ...user,
        ...data.profile.user,
        profileImage: data.profile.image,
      },
    };

    localStorage.setItem("user", JSON.stringify(userDataAndProfile));
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser?.user?.email) {
      setUser(loggedUser.user);
      setIsAdmin(loggedUser.user.isAdmin); // Set isAdmin state based on user data
    }
    setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isAdmin,
        isLoading,
        handleUserLogout,
        handleUserLogin,
        combineUserDataAndProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
