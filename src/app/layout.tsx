// 🚫 REMOVE "use client" from this file
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FXT Appliance Repair",
  description:
    "FXT Appliance Repair — reliable, professional repairs for refrigerators, ovens, washers, dryers, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
