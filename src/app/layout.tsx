import NavBar from "@/components/NavBar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Otto Hines – Developer & Trader',
  description: 'Portfolio site for Otto Hines',
  openGraph: {
    title: 'Otto Hines – Developer & Trader',
    description: 'Check out my work, trading insights, and personal projects.',
    url: 'https://my-website-flame-nine.vercel.app',
    siteName: 'Otto Hines',
    images: [
      {
        url: 'https://my-website-flame-nine.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview of Otto Hines Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Otto Hines – Developer & Trader',
    description: 'Check out my work, trading insights, and personal projects.',
    images: ['https://my-website-flame-nine.vercel.app.jpg/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Analytics />
      <body className=" dark:bg-black dark:text-white" >
        <div className="mx-auto max-w-7xl light:bg-white dark:bg-[#18181c] border border-gray-800 rounded-2xl">
          <NavBar />
          <main>{children}</main>
        </div>
      </body >
    </html >
  );
}
