import "./globals.css";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar_Links from "@/components/Navbar_Links";


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
        <Navbar />
        {/* <Navbar_Links /> */}
        <main className="relative-overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
