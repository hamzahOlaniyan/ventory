
import { Geist } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/components/SideBar/SideBar";
import { AppWrapper } from "@/context";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ventory",
  description: "Inventory Management App",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <AppWrapper>
        <body className="min-h-screen  antialiased relative w-screen bg-whitesmoke" >
          <SideBar />
          {children}
        </body>
      </AppWrapper>
    </html>
  );
}
