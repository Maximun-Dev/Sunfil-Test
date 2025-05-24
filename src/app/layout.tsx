import type { Metadata } from 'next';
import '@/styles/app.scss';
import { geistMono, geistSans } from '@/constants/fonts';
import { metadataConfig } from '@/constants/metadata';
import React from 'react';
import MainLayout from '@Layout/MainLayout';
import { uiHelper } from '@Utils/uiHelper';
import Script from 'next/script';

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = 'manual'` }} />
        {uiHelper.isDevelopment() && (
          <Script src="https://unpkg.com/react-scan/dist/auto.global.js"></Script>
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
