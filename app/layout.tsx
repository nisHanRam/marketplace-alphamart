import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlphaMart",
  description: "Empower Your Creativity with Premium Digital Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ozp0dxf.css" />
      </head>
      <body className="app">{children}</body>
    </html>
  );
}
