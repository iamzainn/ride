import type { Metadata } from "next";

import { ThemeProvider } from "../components/ThemeProvider";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "my app",
  description: "my app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
