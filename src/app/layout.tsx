import "./globals.css";

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
      <body className=" dark:bg-black dark:text-white" >
        <div className="mx-auto max-w-7xl light:bg-white dark:bg-[#18181c] border border-gray-800 rounded-2xl">
          <header className=" px-4 flex justify-center space-x-5">
            <nav className="mt-6 space-x-6 border border-neutral-800 rounded-full text-black dark:text-gray-300 dark:bg-[#25252a] ">
              <a href="#" className="hover:text-green-300 px-3">About</a>
              <a href="#" className="hover:text-green-300">Projects</a>
              <a href="#" className="hover:text-green-300">Trading</a>
              <a href="#" className="hover:text-green-300">Speaking</a>
              <a href="#" className="hover:text-green-300 px-3">Uses</a>
            </nav>
            {/* <ThemeToggle /> */}
          </header>
          <main>{children}</main>
        </div>
      </body >
    </html >
  );
}
