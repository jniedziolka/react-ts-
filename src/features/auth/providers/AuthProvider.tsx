import React from 'react';
import { User } from '@/features/auth/types';
import { ReactChildrenType } from '@/types';
import { useCheckAuth } from '../api/checkAuth';
import { useCurrentUser } from '../api/getCurrentUser';

type AuthContextType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  user?: User;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: ReactChildrenType) {
  const checkAuth = useCheckAuth();
  const currentUser = useCurrentUser({
    options: { enabled: !!checkAuth.data?.authorized },
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthorized: checkAuth.data?.authorized || false,
        isAuthorizing: checkAuth.isLoading,
        user: currentUser.data,
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
