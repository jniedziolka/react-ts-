import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

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
  });
};
