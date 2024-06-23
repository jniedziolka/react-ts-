import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoadingRing } from '../components/Loading';

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export const loadingProtectedRoutes = [
  {
    path: '*',
    element: <LoadingRing />,
  },
];

export const protectedRoutes = [
  {
    path: '/dashboard',
    element: <div>Dashboard</div>,
  },
];

export const protectedRouterRoutes = [
  {
    element: <App />,
    children: [
      ...protectedRoutes.map((route) => ({
        path: route.path,
        element: route.element,
      })),
      {
        path: '*',
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
];
