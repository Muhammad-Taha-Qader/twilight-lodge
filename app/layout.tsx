import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Twilight Lodge",
  description: "Welcome to Twilight Lodge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
