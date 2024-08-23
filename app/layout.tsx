import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import { Analytics } from '@vercel/analytics/react';

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], 
  weight:["200", "300", '400', "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Muhammad Razan",
  description: "UI/UX Designer and Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body className={jakarta.className}>
        <Providers >
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
