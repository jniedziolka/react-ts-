import { axios } from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';

export type CreateInvoiceDTO = {
  number: string;
  medium_type_id: string;
  cost: number;
};

export const createInvoice = (invoiceData: CreateInvoiceDTO) =>
  axios.post('/api/invoice', invoiceData);

export const useCreateInvoice = () => {
  return useMutation({
    mutationFn: (invoiceData: CreateInvoiceDTO) => createInvoice(invoiceData),
  });
};
