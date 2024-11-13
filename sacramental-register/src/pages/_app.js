import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../queryClient';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
