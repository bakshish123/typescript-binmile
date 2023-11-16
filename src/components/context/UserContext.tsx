import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: Dispatch<SetStateAction<AuthUser | null>>;
};

export const UserContextProvider = createContext({} as UserContextType);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContext = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContextProvider.Provider value={{ user, setUser }}>
      {children}
    </UserContextProvider.Provider>
  );
};

export default UserContext;
