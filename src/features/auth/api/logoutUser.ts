import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { CHECK_AUTH_FAILED, CHECK_AUTH_QUERY_KEY } from './checkAuth';

export const logoutUser = () => axios.post('/api/logout');

export const useLogoutUser = () => {
  return useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      queryClient.setQueryData([CHECK_AUTH_QUERY_KEY], CHECK_AUTH_FAILED);
    },
  });
};
