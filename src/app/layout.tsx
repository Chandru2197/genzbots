// "use client"
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { createTheme, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenZBots',
  description: 'A modern world-class bot application',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
  icons: {
    icon: [
      {
        url: '/Zlogo.svg',
        type: 'image/svg+xml',
        sizes: 'any'
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon'
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.5/dist/tailwind.min.css" />
      </head>
      <body className={inter.className}>
        <MantineProvider>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}