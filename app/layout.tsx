import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"], 
  weight:["200", "300", '400', "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Muhammad Razan",
  description: "Portfolio of Muhammad Razan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
