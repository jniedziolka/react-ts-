import { axios } from '@/lib/axios';
import { MediumType } from '../types';
import { useQuery } from '@tanstack/react-query';

export const getMediumTypes = (): Promise<MediumType[]> =>
  axios.get('/api/medium-type');

export const useMediumTypes = () => {
  return useQuery({
    queryKey: ['medium-types'],
    queryFn: () => getMediumTypes(),
  });
};
