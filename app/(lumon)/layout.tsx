import type React from "react";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Lumon application",
  description: "An application from Lumon",
  generator: "Lumon reigstry",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <SidebarProvider>
          <main className="flex justify-center w-full">
            <div className="container">{children}</div>
          </main>{" "}
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
