import type React from "react";
import "@/app/globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Open_Sans } from "next/font/google";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Lumon application",
  description: "An application from Lumon",
  generator: "Lumon registry",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset>{children}</SidebarInset>
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
