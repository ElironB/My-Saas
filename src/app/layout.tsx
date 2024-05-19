import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import { Analytics } from "@vercel/analytics/react";
const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Octic",
  description: "Octic - Your Time Is Important.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 ${font.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SupabaseProvider>
            <UserProvider>
              {children}
              <Analytics />
            </UserProvider>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
