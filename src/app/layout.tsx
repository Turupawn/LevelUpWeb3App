import React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// import ScrollToTop from "@/components/ScrollToTop"
import ScrollThemeProvider from "@/theme";
import { ROOT_METADATA } from "@/constants/route";
// import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/contexts/providers";

import "./globals.css";

export const metadata: Metadata = ROOT_METADATA;
export const viewport: Viewport = { colorScheme: "normal" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* TODO: only on blog detail page */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css"
          integrity="sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <GoogleAnalytics gaId="G-7SCKT33C0W" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ScrollThemeProvider>
            <Providers>
              {children}
              <Analytics />
            </Providers>
          </ScrollThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
