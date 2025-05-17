import "./globals.css";

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
