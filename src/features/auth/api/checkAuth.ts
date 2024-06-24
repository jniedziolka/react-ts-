import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const CHECK_AUTH_QUERY_KEY = 'check-auth';
export const CHECK_AUTH_PASSED = { authorized: true };
export const CHECK_AUTH_FAILED = { authorized: false };

export const checkAuth = (): Promise<{ authorized: boolean }> =>
  axios.get('/api/check-auth');

export const useCheckAuth = () => {
  return useQuery({
    queryKey: [CHECK_AUTH_QUERY_KEY],
    queryFn: () => checkAuth(),
  });
};
