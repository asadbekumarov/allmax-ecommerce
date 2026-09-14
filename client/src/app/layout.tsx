import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "ALLMAX | Hamyonbop Narxlar Fix Price - Erkaklar Kiyim Do'koni",
  description: "ALLMAX Fix Price erkaklar kiyimlari do'koni. Toshkent sh., Chilonzor, Bunyodkor Korzinka pastki qavati. 24/7 ochiq. Tel: +998 (78) 555-31-31",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark">
      <body
        className={`${montserrat.className} ${playfair.variable} bg-[#0a0a0a] text-white antialiased selection:bg-[#22c55e] selection:text-black min-h-screen flex flex-col justify-between`}
      >
        {/* TOP BAR */}
        <TopBar />

        {/* HEADER / NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

        <ToastContainer
          position="bottom-right"
          theme="dark"
          toastClassName="bg-[#141414] text-white border border-[#262626]"
        />
      </body>
    </html>
  );
}
