
import { Geist } from "next/font/google";
import "./globals.css";
import { SideBar } from "@/src/components/SideBar/SideBar";
import { AppWrapper } from "@/src/context";

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
    <html lang="en" className={`${geistSans.className} bg-whitesmoke`} suppressHydrationWarning>
      <AppWrapper>
        <body className="antialiased relative bg-whitesmoke" >
          <SideBar />
          {children}
        </body>
      </AppWrapper>
    </html>
  );
}
