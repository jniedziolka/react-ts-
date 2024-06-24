import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoadingRing } from '../components/Loading';
import { Invoices } from '@/features/invoice/routes/Invoices';
import { CreateInvoice } from '@/features/invoice/routes/CreateInvoice';

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
    path: '/invoices',
    element: <Invoices />,
  },
  {
    path: '/invoices/create',
    element: <CreateInvoice />,
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
        element: <Navigate to="/invoices" />,
      },
    ],
  },
];
