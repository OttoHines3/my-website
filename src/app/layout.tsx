import NavBar from "@/components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const SITE_URL = 'https://my-website-flame-nine.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Otto Hines – Software Engineer',
  description:
    'Otto Hines is a software engineer in Chicago building full-stack web applications and trading tools with React, Next.js, and TypeScript.',
  openGraph: {
    title: 'Otto Hines – Software Engineer',
    description:
      'Full-stack engineer building web applications and trading tools. Previously Microsoft and Cass & York.',
    url: SITE_URL,
    siteName: 'Otto Hines',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of Otto Hines Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otto Hines – Software Engineer',
    description:
      'Full-stack engineer building web applications and trading tools. Previously Microsoft and Cass & York.',
    images: ['/og-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#18181c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="mx-auto max-w-7xl bg-[#18181c] border border-gray-800 sm:rounded-2xl">
          <NavBar />
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
