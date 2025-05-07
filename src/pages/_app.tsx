
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
