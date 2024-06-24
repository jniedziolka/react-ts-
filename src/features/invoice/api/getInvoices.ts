import { GridQueryOptions, PaginatedData } from '@/types';
import { Invoice } from '../types';
import { buildPaginationQuery } from '@/utils/buildPaginationQuery';
import { axios } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

export const getPaginatedInvoices = (
  gridQueryOptions: GridQueryOptions
): Promise<PaginatedData<Invoice>> =>
  axios.get('/api/invoice' + buildPaginationQuery(gridQueryOptions));

export const usePaginatedInvoices = (gridQueryOptions: GridQueryOptions) =>
  useQuery({
    queryKey: ['invoices', ...Object.entries(gridQueryOptions)],
    queryFn: () => getPaginatedInvoices(gridQueryOptions),
  });
