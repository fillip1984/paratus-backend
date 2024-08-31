import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { use } from "react";
import { getServerAuthSession } from "~/server/auth";
import { TRPCReactProvider } from "~/trpc/react";
import SideNav from "./_components/sideNav";
import { type Metadata } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";
import LogIn from "./_components/logIn";

export const metadata: Metadata = {
  title: "Paratus App",
  description: "Habit forming app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = use(getServerAuthSession());
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{session ? <App>{children}</App> : <LogIn />}</body>
    </html>
  );
}

const App = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <TRPCReactProvider>
      <div className="flex h-screen overflow-hidden">
        <SideNav />
        {children}
      </div>
    </TRPCReactProvider>
  );
};
