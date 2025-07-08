import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ResponsiveIndicator, ThemeWrapper } from '@/components/atoms';
import { Footer, TitleBar } from '@/components/organisms';
import { ENV } from '@/lib/constants';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope', // Optional: for use with Tailwind CSS
});

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
      <body className={manrope.className}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <TitleBar />
            {children}
            <Footer />
          </main>
        </ThemeWrapper>
        <ResponsiveIndicator />
      </body>
    </html>
  );
}
