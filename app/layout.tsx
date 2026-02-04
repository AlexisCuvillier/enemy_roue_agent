import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enemy Ops - Operator Roulette",
  description: "Focused tactical selection. Toggle between roles and spin to deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

