import React, { createContext, useState, useEffect } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Pull saved login state from localStorage / AsyncStorage
  }, []);

  const login = () => {
    sleep(2000).then(() => setLoggedIn(true));
  };

  const logout = () => {
    sleep(2000).then(() => setLoggedIn(false));
  };

  const authContextValue = {
    login,
    loggedIn,
    logout
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
