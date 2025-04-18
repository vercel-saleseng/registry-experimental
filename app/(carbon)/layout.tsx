"use client";

import type React from "react";
import "@/app/(carbon)/global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
