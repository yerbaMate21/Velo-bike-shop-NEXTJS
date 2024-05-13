import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Velo",
  description: "Road, Gravel and E-Bikes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <AuthProvider>
          <main className="relative flex min-h-screen min-w-[300px] flex-col">
            <div className="flex-1 flex-grow">{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
