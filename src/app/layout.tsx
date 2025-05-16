import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="mx-auto max-w-7xl bg-[#18181c] ">
          <header className=" px-4 flex justify-center">
            <nav className="mt-6 space-x-6 border border-neutral-800 rounded-full text-gray-300 bg-[#25252a]">
              <a href="#" className="hover:text-green-300 px-3">About</a>
              <a href="#" className="hover:text-green-300">Articles</a>
              <a href="#" className="hover:text-green-300">Projects</a>
              <a href="#" className="hover:text-green-300">Speaking</a>
              <a href="#" className="hover:text-green-300 px-3">Uses</a>
            </nav>

            <ThemeToggle />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
