import { epilogue } from "@/constants/fonts";
import { metadataConfig } from "@/constants/metadata";
import "@/styles/app.scss";
import MainLayout from "@Layout/MainLayout";
import { uiHelper } from "@Utils/uiHelper";
import type { Metadata } from "next";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = 'manual'`,
          }}
        />
        {uiHelper.isDevelopment() && (
          <Script src="https://unpkg.com/react-scan/dist/auto.global.js"></Script>
        )}
      </head>
      <body className={`${epilogue.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
