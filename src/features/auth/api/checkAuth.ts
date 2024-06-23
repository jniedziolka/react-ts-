import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const checkAuth = (): Promise<{ authorized: boolean }> =>
  axios.get('/api/check-auth');

export const useCheckAuth = () => {
  return useQuery({
    queryKey: ['check-auth'],
    queryFn: () => checkAuth(),
  });
};
