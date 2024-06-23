import { axios } from '@/lib/axios';
import { User } from '../types';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

export const getCurrentUser = (): Promise<User> => axios.get('/api/user');

type UseCurrentUserOptions = {
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>;
};

export const useCurrentUser = ({ options }: UseCurrentUserOptions) =>
  useQuery({
    queryKey: ['currentUser'],
    queryFn: () => getCurrentUser(),
    ...options,
  });
