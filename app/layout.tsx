import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";


const inter = Inter({ subsets: ["latin"] });
export const lato = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});
export const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volunteer Abroad!",
  description: "Volunteer with AIESEC in IIT",
  icons: {
    icon: "/favicon.ico",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative-overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
