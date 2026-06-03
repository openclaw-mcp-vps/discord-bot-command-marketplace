import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommandMarket — Buy & Sell Discord Bot Commands",
  description: "Marketplace where developers sell pre-built Discord bot commands and server owners can purchase and instantly deploy them."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0254fccb-cc83-4797-a1ed-fa305acece37"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
