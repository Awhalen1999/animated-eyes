import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animated Eyes",
  description: "Interactive animated eyes that follow your cursor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
