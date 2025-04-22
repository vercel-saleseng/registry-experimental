import type React from "react";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://design.cms.gov/cdn/design-system/12.0.0/css/index.css"
        />
        <link
          rel="stylesheet"
          href="https://design.cms.gov/cdn/design-system/12.0.0/css/core-theme.css"
        />
      </head>
      <body className="ds-content">
        {children}
        <Script src="https://design.cms.gov/cdn/design-system/12.0.0/web-components/bundle/all.js"></Script>
      </body>
    </html>
  );
}
