import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tag",
  description: "Share Your Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{
        variables: {
        colorPrimary: "#0E78F9",

        }
}}>
      <body
          className={`${inter.className} bg-black text-white antialiased`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
