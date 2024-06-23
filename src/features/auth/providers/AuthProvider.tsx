import React from 'react';
import { User } from '@/features/auth/types';
import { ReactChildrenType } from '@/types';

type AuthContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  user?: User;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: ReactChildrenType) {
  return (
    <AuthContext.Provider
      value={{
        isAuthorized: false,
        isAuthorizing: false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = React.useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth has to be used within <AuthContext.Provider>');
  }

  return authContext;
}
