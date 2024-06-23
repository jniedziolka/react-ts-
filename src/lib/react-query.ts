import { AxiosError } from 'axios';
import '@tanstack/react-query';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError;
  }
}

import { DefaultOptions, QueryClient } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    retry: false,
    refetchOnWindowFocus: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
