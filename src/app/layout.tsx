import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Navbar from "@/components/Navbar";

const inter = Raleway({ 
  subsets: ["latin"],
  variable: '--font-raleway'
});

export const metadata: Metadata = {
  title: "Rihan Mulani",
  description: "Rihan Mulani, Software Developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex flex-col min-h-[100%]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <BackgroundBeams />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
