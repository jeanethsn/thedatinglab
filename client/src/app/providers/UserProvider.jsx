import { useState, useContext, createContext, useEffect } from "react";

const UserContext = createContext({
  user: {},
  isLoading: false,
});

export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleUserLogout = () => {
    localStorage.removeItem("user");
    setUser({});
  };

  const handleUserLogin = (data) => {
    setUser(data);
  };

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser?.user?.email) {
      setUser(loggedUser.user);
    }
    setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isLoading, handleUserLogout, handleUserLogin }}
    >
      {children}
    </UserContext.Provider>
  );
}