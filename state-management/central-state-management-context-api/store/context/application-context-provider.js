import { useState } from 'react';
import { ApplicationContext } from './application-context';

// Steg 2. Skapar vi vår provider...
const ApplicationContextProvider = ({ children }) => {
  // Använd useState för att signalera ändringar i datat...
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const config = {
    userInfo: userInfo,
    isLoggedIn: isLoggedIn,
  };

  // Skapa JSX...
  return (
    <ApplicationContext.Provider value={config}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
