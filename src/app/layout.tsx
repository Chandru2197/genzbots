// "use client"
import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { createTheme, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenZBot',
  description: 'A modern world-class bot application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <MantineProvider>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}