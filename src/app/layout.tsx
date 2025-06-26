import './globals.css';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import Script from 'next/script';
import { ResponsiveIndicator } from '@/components/atoms/responsive-indicator';
import { ThemeWrapper } from '@/components/atoms/theme-wrapper';
import { Footer } from '@/components/organisms/footer';
import { Navbar } from '@/components/organisms/navbar';
import {
  NavbarMobile,
  NavbarProvider,
} from '@/components/organisms/navbar-mobile';

import { ENV } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title: {
    default: 'Stephen',
    template: '%s | Stephen',
  },
  description: 'Get to know me, Stephen, through this website',
  openGraph: {
    title: 'Stephen',
    description: 'Get to know me, Stephen, through this website!',
    url: ENV.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Stephen',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Stephen',
    card: 'summary_large_image',
  },
  verification: {
    google: ENV.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <NavbarProvider>
              <Navbar />
              <NavbarMobile />
            </NavbarProvider>
            {children}
            <Footer />
          </main>
        </ThemeWrapper>
        <ResponsiveIndicator />
      </body>
    </html>
  );
}
