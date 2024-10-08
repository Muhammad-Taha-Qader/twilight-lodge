import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
