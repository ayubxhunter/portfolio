import type { Metadata } from "next";
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import "./globals.css";

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Ayub Hunter | Home",
  description: "",
};

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
