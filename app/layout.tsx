import type { Metadata } from 'next';
import type React from 'react';
import { ThemeProvider } from '~/components/theme-provider';
import { Analytics } from '~/components/51la';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: '有好艾',
  description: '有好艾-传承千年艾灸，守护健康之道',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
