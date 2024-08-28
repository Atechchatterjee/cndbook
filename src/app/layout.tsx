import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { space_grotesk } from "../font";
import "./globals.css";

export const metadata: Metadata = {
  title: "CND Book",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={space_grotesk.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
