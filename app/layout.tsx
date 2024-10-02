import "./globals.css";
import { Metadata } from "next";
import { getTokens } from "next-firebase-auth-edge";
import { cookies, headers } from "next/headers";
import { authConfig } from "../config/server-config";
import { AuthProvider } from "../auth/AuthProvider";
import NextTopLoader from "nextjs-toploader";
import { toUser } from "../shared/user";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/layout/providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <NextTopLoader showSpinner={false} />

          <Toaster />
          {children}
       
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "NextJs Firebase Auth",
  description: "Next.js login page with Firebase authentication",
  icons: "/favicon.ico",
};
