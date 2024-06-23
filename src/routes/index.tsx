import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { useAuth } from '@/features/auth/providers/AuthProvider';
import { loadingProtectedRoutes, protectedRouterRoutes } from './protected';

export function AppRoutes() {
  const { isAuthorizing, isAuthorized } = useAuth();

  const routes = isAuthorizing
    ? loadingProtectedRoutes
    : isAuthorized
    ? protectedRouterRoutes
    : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
}
