import { Inter } from 'next/font/google';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ViewportProvider>
          <FlashMessageProvider>
            <ContactFormProvider>{children}</ContactFormProvider>
          </FlashMessageProvider>
        </ViewportProvider>
      </body>
    </html>
  );
}
