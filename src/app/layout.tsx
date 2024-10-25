import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenDream',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewportProvider>
          <FlashMessageProvider>{children}</FlashMessageProvider>
        </ViewportProvider>
      </body>
    </html>
  );
}
