import { axios } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';
import { useMutation } from '@tanstack/react-query';
import { CHECK_AUTH_PASSED, CHECK_AUTH_QUERY_KEY } from './checkAuth';

export type LoginUserDTO = {
  email: string;
  password: string;
};

export const loginUser = async (loginData: LoginUserDTO) => {
  await axios.get('/sanctum/csrf-cookie');
  return await axios.post('/api/login', loginData);
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: (loginData: LoginUserDTO) => loginUser(loginData),
    onSuccess: () => {
      queryClient.setQueryData([CHECK_AUTH_QUERY_KEY], CHECK_AUTH_PASSED);
    },
  });
};
