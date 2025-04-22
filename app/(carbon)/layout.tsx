import type React from "react";
import "@carbon/styles/css/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
            }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
