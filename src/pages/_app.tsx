
import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={inter.className}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
