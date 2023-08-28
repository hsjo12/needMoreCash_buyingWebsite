"use client";
import { createContext, useContext, useState } from "react";
export const ContextApI = createContext();

export const ArtAPI = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <ContextApI.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </ContextApI.Provider>
  );
};

export default ArtAPI;
