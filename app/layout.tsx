import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import SideNavbar from "@/components/SideNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body
        className={cn("min-h-screen w-full bg-white text-black flex", `${geistSans.variable} ${geistMono.variable} antialiased`, 
          {"debug-screens": process.env.NODE_ENV === "development"}
        )}
      >
        {/* sidebar */}
        {/* <p className="border">SideBar</p> */}
        <SideNavbar/>
        {/* mainpage */}
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
