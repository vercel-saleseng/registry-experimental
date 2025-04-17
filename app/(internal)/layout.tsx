import type React from "react";
import "@/app/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Geist_Mono } from "next/font/google";
import { InternalSidebar } from "@/components/internal/internal-sidebar";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Registry Demo",
  description:
    "A registry for Lumon's design system. Explore components, templates, and more.",
  generator: "v0.dev",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <SidebarProvider>
          <InternalSidebar />
          <main className="flex justify-center w-full">
            <div className="container">{children}</div>
          </main>{" "}
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
