'use client';

import { PropsWithChildren, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { staleTime: 60 * 1000 * 5 },
        },
      })
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ToastContainer position="top-center" />
      </QueryClientProvider>
    </>
  );
};

export default Providers;
