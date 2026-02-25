import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter, Abhaya_Libre } from 'next/font/google'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F8F8F8',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://helena-contreras-portfolio.vercel.app'),
  title: "Helena Contreras | UI/UX Designer",
  authors: [{ name: "Helena Contreras" }],
  description: `UI/UX Designer and Graphic Designer with 11+ combined years of experience conceptualizing,
          executing  and implementing creative solutions for various brands and companies.`,
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Helena Contreras | UI/UX Designer',
    description: `UI/UX Designer and Graphic Designer with 11+ combined years of experience conceptualizing,
          executing  and implementing creative solutions for various brands and companies.`,
    siteName: 'Helena Contreras',
    images: [
      {
        url: '/CEPPEMAC.png',
        width: 1088,
        height: 489,
        alt: 'CEPPEMAC Preview',
      }
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const abhaya = Abhaya_Libre({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abhaya",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${abhaya.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="grow flex w-full justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
