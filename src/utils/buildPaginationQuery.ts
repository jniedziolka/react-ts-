import { GridQueryOptions } from '@/types';

export const buildPaginationQuery = ({ page, perPage }: GridQueryOptions) =>
  `?page=${page}&perPage=${perPage}`;
